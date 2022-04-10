import { PLACED } from "constants/order";
import { UserDao } from "dao/user";
import { OrdersIndexPostPayload } from "interfaces/api/orders";
import { Order, StoredOrder } from "interfaces/order";
import { v4 } from "uuid";

export function createOrder(
  raw: OrdersIndexPostPayload & Pick<StoredOrder, "placedUserId">
) {
  return {
    ...raw,
    id: v4(),
    statusId: PLACED,
    placedTime: new Date(),
    takenTime: null,
    takenUserId: null,
    finishedTime: null,
  } as StoredOrder;
}

export async function convertStoredOrder(storedOrder: StoredOrder) {
  const { placedUserId, takenUserId, ...rest } = storedOrder;
  if (takenUserId) {
    return {
      ...rest,
      placedUser: await UserDao.selectById(placedUserId),
      takenUser: await UserDao.selectById(takenUserId),
    } as Order;
  } else {
    return {
      ...rest,
      placedUser: await UserDao.selectById(placedUserId),
      takenUser: null,
    } as Order;
  }
}
