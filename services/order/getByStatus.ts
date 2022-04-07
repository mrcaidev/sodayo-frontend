import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { OrderUtils } from "utils/order";
import { isOrderStatus } from "utils/validator/isOrderStatus";

export async function getByStatus(status: number) {
  // Validate status.
  if (!isOrderStatus(status)) {
    throw new BackendError(422, "订单状态错误");
  }

  // Fetch orders.
  const rows = await OrderDao.selectByStatusId(status);
  const orders = rows.map(row => OrderUtils.fromString(row));
  return orders;
}
