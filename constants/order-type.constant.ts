export enum OrderType {
  takeout,
  express,
  shop,
  print,
  other,
}

export const OrderTypeMap: Record<number, { name: string; color: string }> = {
  [OrderType.takeout]: {
    name: "外卖",
    color: "gold",
  },
  [OrderType.express]: {
    name: "快递",
    color: "darkgreen",
  },
  [OrderType.shop]: {
    name: "超市",
    color: "pink",
  },
  [OrderType.print]: {
    name: "打印",
    color: "brown",
  },
  [OrderType.other]: {
    name: "其它",
    color: "indigo",
  },
};
