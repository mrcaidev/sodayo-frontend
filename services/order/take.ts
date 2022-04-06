import { TAKEN } from "constants/orderStatus";
import { OrderDao } from "dao/order";
import { Order } from "interfaces/order";
import { isUUID } from "utils/validators/isUUID";

export async function take(userId: string, orderId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

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
  const newOrder = { ...order, statusId: TAKEN, takenUserId: userId } as Order;
  const updated = await OrderDao.update(newOrder);

  // On failure.
  if (!updated) {
    throw new Error("接单失败，请稍后再试");
  }
}
