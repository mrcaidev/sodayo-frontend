import { OrderStatus } from "interfaces/orderStatus";

export const PENDING = 1;
export const TAKEN = 2;
export const DONE = 3;

export const orderStatus: Record<number, OrderStatus> = {
  [PENDING]: {
    name: "待接单",
    color: "lightblue",
  },
  [TAKEN]: {
    name: "进行中",
    color: "lightgreen",
  },
  [DONE]: {
    name: "已完成",
    color: "lightgray",
  },
};
