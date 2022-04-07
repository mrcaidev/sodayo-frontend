import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { isUUID } from "utils/validator/isUUID";

export async function getInfo(orderId: string) {
  // Verify order ID.
  if (!isUUID(orderId)) {
    throw new BackendError(422, "订单ID格式错误");
  }

  // Fetch order.
  const order = await OrderDao.selectById(orderId);
  if (!order) {
    throw new BackendError(422, "订单不存在");
  }
  return order;
}
