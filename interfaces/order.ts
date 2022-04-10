import { User } from "./user";

export interface StoredOrder {
  id: string;
  typeId: number;
  cost: number | null;
  description: string;
  statusId: number;
  placedTime: Date;
  placedUserId: string;
  takenTime: Date | null;
  takenUserId: string | null;
  finishedTime: Date | null;
}

export interface Order
  extends Omit<StoredOrder, "placedUserId" | "takenUserId"> {
  placedUser: User;
  takenUser: User | null;
}
