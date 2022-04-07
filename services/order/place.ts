import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { Order } from "interfaces/order";
import { OrderUtils } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function place(
  raw: Pick<Order, "cost" | "description" | "placedUserId" | "typeId">
) {
  // Validate user ID.
  if (!isUUID(raw.placedUserId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Create and persist new order.
  const order = OrderUtils.create(raw);
  const inserted = await OrderDao.insert(order);

  // On failure.
  if (!inserted) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
