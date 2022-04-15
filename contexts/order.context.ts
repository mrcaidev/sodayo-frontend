import { Order } from "interfaces/order.entity";
import { createContext, useContext } from "react";

export const OrderContext = createContext<Order>(undefined!);
export const OrderProvider = OrderContext.Provider;
OrderContext.displayName = "OrderContext";

export function useOrderContext() {
  return useContext(OrderContext);
}
