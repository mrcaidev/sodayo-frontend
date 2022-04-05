import { OrderDao } from "dao/order";
import { isUUID } from "utils/validators/isUUID";

export async function getPlacedByUserId(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

  // Fetch orders.
  const orders = await OrderDao.selectByPlacedUserId(userId);

  // On failure.
  if (orders === undefined) {
    throw new Error("未知错误，请稍后再试");
  }

  // On success.
  return orders;
}
