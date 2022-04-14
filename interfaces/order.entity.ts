import { User } from "./user.entity";

export interface Order {
  id: string;
  type: number;
  status: number;
  description: string;
  cost: number | null;
  placedTime: Date;
  takenTime: Date | null;
  finishedTime: Date | null;
  placedUser: User;
  takenUser: User | null;
}
