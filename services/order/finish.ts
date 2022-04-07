import { FINISHED } from "constants/order";
import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { Order } from "interfaces/order";
import { OrderUtils } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function finish(orderId: string) {
  // Validate order ID.
  if (!isUUID(orderId)) {
    throw new BackendError(422, "订单ID格式错误");
  }

  // Ensure order exists.
  const row = await OrderDao.selectById(orderId);
  if (!row) {
    throw new BackendError(422, "订单不存在");
  }
  const order = OrderUtils.fromString(row);

  // Update order.
  const newOrder = {
    ...order,
    finishedTime: new Date(),
    statusId: FINISHED,
  } as Order;
  const updated = await OrderDao.update(newOrder);

  // On failure.
  if (!updated) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
