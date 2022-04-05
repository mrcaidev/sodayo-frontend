import { DONE } from "constants/orderStatus";
import { OrderDao } from "dao/order";
import { Order } from "interfaces/order";
import { isUUID } from "utils/validators/isUUID";

export async function done(orderId: string) {
  // Validate order ID.
  if (!isUUID(orderId)) {
    throw new Error("不合法的订单ID");
  }

  // Ensure order exists.
  const order = await OrderDao.selectById(orderId);
  if (!order) {
    throw new Error("订单不存在");
  }

  // Update order.
  const bundled = { ...order, endTime: new Date(), statusId: DONE } as Order;
  const updated = await OrderDao.update(bundled);

  // On failure.
  if (!updated) {
    throw new Error("结束失败，请稍后再试");
  }
}
