import { Order } from "interfaces/order";
import { ToString } from "types/toString";

export function converter(raw: ToString<Order>) {
  const { endTime, startTime, statusId, typeId, ...rest } = raw;
  return {
    endTime: new Date(endTime),
    startTime: new Date(startTime),
    statusId: Number(statusId),
    typeId: Number(typeId),
    ...rest,
  } as Order;
}
