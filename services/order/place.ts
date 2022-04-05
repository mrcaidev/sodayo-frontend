import { PENDING } from "constants/orderStatus";
import { OrderDao } from "dao/order";
import { Order } from "interfaces/order";
import { isUUID } from "utils/validators/isUUID";
import { v4 } from "uuid";

function generateNewOrder({
  description,
  placedUserId,
  remark,
  typeId,
}: Pick<Order, "description" | "placedUserId" | "remark" | "typeId">) {
  // Start now.
  const startTime = new Date();
  const endTime = new Date(startTime);
  endTime.setHours(endTime.getHours() + 2);

  return {
    description,
    endTime,
    id: v4(),
    placedUserId,
    remark,
    startTime,
    statusId: PENDING,
    takenUserId: "",
    typeId,
  } as Order;
}

export async function place(
  userId: string,
  material: Pick<Order, "description" | "remark" | "typeId">
) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

  // Create and persist new order.
  const order = generateNewOrder({ placedUserId: userId, ...material });
  const inserted = await OrderDao.insert(order);

  // On failure.
  if (!inserted) {
    throw new Error("订单创建失败，请稍后再试");
  }
}
