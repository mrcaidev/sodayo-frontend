import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { IndexPostPayload } from "interfaces/api/orders";
import { Order } from "interfaces/order";
import { createOrder } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function place(
  raw: IndexPostPayload & Pick<Order, "placedUserId">
) {
  // Validate user ID.
  if (!isUUID(raw.placedUserId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Create and persist new order.
  const order = createOrder(raw);
  const inserted = await OrderDao.insert(order);

  // On failure.
  if (!inserted) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
