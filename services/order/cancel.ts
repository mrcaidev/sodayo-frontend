import { OrderDao } from "dao/order";
import { isUUID } from "utils/validators/isUUID";

export async function cancel(orderId: string) {
  // Validate order ID.
  if (!isUUID(orderId)) {
    throw new Error("不合法的订单ID");
  }

  // Delete order.
  const deleted = await OrderDao.deleteById(orderId);

  // On failure.
  if (!deleted) {
    throw new Error("删除失败");
  }
}
