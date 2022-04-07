import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { OrderUtils } from "utils/order";
import { isUUID } from "utils/validator/isUUID";

export async function getPlacedByUserId(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Fetch orders.
  const rows = await OrderDao.selectByPlacedUserId(userId);
  const orders = rows.map(row => OrderUtils.fromString(row));
  return orders;
}
