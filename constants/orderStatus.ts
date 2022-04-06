import { OrderStatus } from "interfaces/order";

export const PLACED = 1;
export const TAKEN = 2;
export const FINISHED = 3;

export const orderStatus: Record<number, OrderStatus> = {
  [PLACED]: {
    name: "待接单",
    color: "lightblue",
  },
  [TAKEN]: {
    name: "进行中",
    color: "lightgreen",
  },
  [FINISHED]: {
    name: "已完成",
    color: "lightgray",
  },
};
