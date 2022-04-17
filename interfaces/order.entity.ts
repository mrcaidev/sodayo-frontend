import { OrderStatus } from "constants/order-status.constant";
import { OrderType } from "constants/order-type.constant";
import { User } from "./user.entity";

export interface Order {
  id: string;
  type: OrderType;
  status: OrderStatus;
  description: string;
  cost: number;
  placedTime: Date;
  takenTime: Date | null;
  finishedTime: Date | null;
  placedUser: User;
  takenUser: User | null;
}
