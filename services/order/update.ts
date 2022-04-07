import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { IdPatchPayload } from "interfaces/api/orders";
import { Order } from "interfaces/order";
import { isOrderStatus } from "utils/validator/isOrderStatus";
import { isUUID } from "utils/validator/isUUID";

export async function update(orderId: string, payload: IdPatchPayload) {
  // If no profile is given.
  if (Object.keys(payload).length === 0) {
    return;
  }

  // Validate order ID.
  if (!isUUID(orderId)) {
    throw new BackendError(422, "订单ID格式错误");
  }

  // Validate user ID.
  if (payload.takenUserId && !isUUID(payload.takenUserId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Validate status ID.
  if (payload.statusId && !isOrderStatus(payload.statusId)) {
    throw new BackendError(422, "订单状态错误");
  }

  // Ensure order exists.
  const order = await OrderDao.selectById(orderId);
  if (!order) {
    throw new BackendError(422, "订单不存在");
  }

  // Override old info with new one.
  const newOrder = { ...order, ...payload } as Order;
  const updated = await OrderDao.update(newOrder);

  // On failure.
  if (!updated) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
