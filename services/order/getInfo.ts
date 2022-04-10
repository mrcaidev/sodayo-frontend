import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { convertStoredOrder } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function getInfo(orderId: string) {
  // Verify order ID.
  if (!isUUID(orderId)) {
    throw new BackendError(422, "订单ID格式错误");
  }

  // Fetch order.
  const storedOrder = await OrderDao.selectById(orderId);
  if (!storedOrder) {
    throw new BackendError(422, "订单不存在");
  }
  return convertStoredOrder(storedOrder);
}
