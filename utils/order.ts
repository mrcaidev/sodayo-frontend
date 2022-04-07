import { PLACED } from "constants/order";
import { Order } from "interfaces/order";
import { ToString } from "types/toString";
import { v4 } from "uuid";

export const OrderUtils = {
  fromString,
  create,
};

function fromString(raw: ToString<Order>) {
  return {
    ...raw,
    typeId: Number(raw.typeId),
    statusId: Number(raw.statusId),
    placedTime: new Date(raw.placedTime),
    takenTime: new Date(raw.takenTime),
    finishedTime: new Date(raw.finishedTime),
    cost: Number(raw.cost),
  } as Order;
}

function create(
  raw: Pick<Order, "cost" | "description" | "placedUserId" | "typeId">
) {
  return {
    ...raw,
    id: v4(),
    statusId: PLACED,
    placedTime: new Date(),
    takenTime: new Date(),
    finishedTime: new Date(),
    takenUserId: "",
  } as Order;
}
