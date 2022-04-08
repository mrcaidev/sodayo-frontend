import { PLACED } from "constants/order";
import { IndexPostPayload } from "interfaces/api/orders";
import { Order } from "interfaces/order";
import { v4 } from "uuid";

export function createOrder(
  raw: IndexPostPayload & Pick<Order, "placedUserId">
) {
  return {
    ...raw,
    id: v4(),
    statusId: PLACED,
    placedTime: new Date(),
    takenTime: null,
    takenUserId: null,
    finishedTime: null,
  } as Order;
}
