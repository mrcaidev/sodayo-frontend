import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { OrdersIndexPostPayload } from "interfaces/api/orders";
import { StoredOrder } from "interfaces/order";
import { createOrder } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function place(
  raw: OrdersIndexPostPayload & Pick<StoredOrder, "placedUserId">
) {
  // Validate user ID.
  if (!isUUID(raw.placedUserId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Create and persist new order.
  const orderToStore = createOrder(raw);
  const inserted = await OrderDao.insert(orderToStore);

  // On failure.
  if (!inserted) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
