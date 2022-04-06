import { PLACED } from "constants/orderStatus";
import { OrderDao } from "dao/order";
import { Order } from "interfaces/order";
import { isUUID } from "utils/validators/isUUID";
import { v4 } from "uuid";

export async function place(
  raw: Pick<Order, "cost" | "description" | "placedUserId" | "typeId">
) {
  // Validate user ID.
  if (!isUUID(raw.placedUserId)) {
    throw new Error("不合法的用户ID");
  }

  // Create and persist new order.
  const order = {
    ...raw,
    finishedTime: new Date(),
    id: v4(),
    placedTime: new Date(),
    statusId: PLACED,
    takenTime: new Date(),
    takenUserId: "",
  } as Order;
  const inserted = await OrderDao.insert(order);

  // On failure.
  if (!inserted) {
    throw new Error("订单创建失败，请稍后再试");
  }
}
