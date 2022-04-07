import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { isUUID } from "utils/validator/isUUID";

export async function getTakenByUserId(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Fetch orders.
  const orders = await OrderDao.selectByTakenUserId(userId);
  return orders;
}
