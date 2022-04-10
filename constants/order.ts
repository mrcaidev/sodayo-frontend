// Order status.
export const PLACED = 1;
export const TAKEN = 2;
export const FINISHED = 3;

export const orderStatus: Record<number, string> = {
  [PLACED]: "待接单",
  [TAKEN]: "已接单",
  [FINISHED]: "已完成",
};

// Order type.
export const TAKEOUT = 1;
export const EXPRESS = 2;
export const SHOP = 3;
export const PRINT = 4;
export const OTHER = 5;

export const orderType: Record<number, { name: string; color: string }> = {
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

// Default page size.
export const DEFAULT_SQUARE_PAGE_SIZE = 5;
