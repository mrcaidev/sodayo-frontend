import { OrderDao } from "dao/order";
import { isOrderStatus } from "utils/validators/isOrderStatus";

export async function getByStatus(status: number) {
  // Validate status.
  if (!isOrderStatus(status)) {
    throw new Error("不合法的订单状态");
  }

  // Fetch orders.
  const orders = await OrderDao.selectByStatusId(status);

  // On failure.
  if (orders === undefined) {
    throw new Error("未知错误，请稍后再试");
  }

  // On success.
  return orders;
}
