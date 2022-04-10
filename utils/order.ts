import { PLACED } from "constants/order";
import { UserDao } from "dao/user";
import { OrdersIndexPostPayload } from "interfaces/api/orders";
import { Order, StoredOrder } from "interfaces/order";
import { v4 } from "uuid";
import { toPublicUser } from "./user";

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
  const storedPlacedUser = await UserDao.selectById(placedUserId);
  const placedUser = toPublicUser(storedPlacedUser);
  let takenUser = null;
  if (takenUserId) {
    const storedTakenUser = await UserDao.selectById(takenUserId);
    takenUser = toPublicUser(storedTakenUser);
  }
  if (takenUserId) {
    return { ...rest, placedUser, takenUser } as Order;
  } else {
    return { ...rest, placedUser, takenUser } as Order;
  }
}
