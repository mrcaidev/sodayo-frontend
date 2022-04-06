import { OrderType } from "interfaces/order";

export const TAKEOUT = 1;
export const EXPRESS = 2;
export const SHOP = 3;
export const PRINT = 4;
export const OTHER = 5;

export const orderTypes: Record<number, OrderType> = {
  [TAKEOUT]: {
    name: "外卖",
    color: "gold",
  },
  [EXPRESS]: {
    name: "快递",
    color: "green",
  },
  [SHOP]: {
    name: "超市",
    color: "pink",
  },
  [PRINT]: {
    name: "打印",
    color: "brown",
  },
  [OTHER]: {
    name: "其它",
    color: "indigo",
  },
};
