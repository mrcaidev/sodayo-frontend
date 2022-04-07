import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { isOrderStatus } from "utils/validator/isOrderStatus";

export async function getByStatus(status: number) {
  // Validate status.
  if (!isOrderStatus(status)) {
    throw new BackendError(422, "订单状态错误");
  }

  // Fetch orders.
  const orders = await OrderDao.selectByStatusId(status);
  return orders;
}
