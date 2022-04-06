import { Order } from "interfaces/order";
import { ToString } from "types/toString";

export function converter(raw: ToString<Order>) {
  const {
    typeId,
    statusId,
    placedTime,
    takenTime,
    finishedTime,
    cost,
    ...rest
  } = raw;
  return {
    typeId: Number(typeId),
    statusId: Number(statusId),
    placedTime: new Date(placedTime),
    takenTime: new Date(takenTime),
    finishedTime: new Date(finishedTime),
    cost: Number(cost),
    ...rest,
  } as Order;
}
