export enum OrderStatus {
  placed,
  taken,
  finished,
}

export const OrderStatusMap = {
  [OrderStatus.placed]: {
    name: "待接单",
  },
  [OrderStatus.taken]: {
    name: "已接单",
  },
  [OrderStatus.finished]: {
    name: "已完成",
  },
};
