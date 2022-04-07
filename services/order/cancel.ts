import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { isUUID } from "utils/validator/isUUID";

export async function cancel(orderId: string) {
  // Validate order ID.
  if (!isUUID(orderId)) {
    throw new BackendError(422, "订单ID格式错误");
  }

  // Delete order.
  const deleted = await OrderDao.deleteById(orderId);

  // On failure.
  if (!deleted) {
    throw new BackendError(422, "订单不存在");
  }
}
