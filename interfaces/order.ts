export interface Order {
  id: string;
  typeId: number;
  cost: number;
  description: string;
  statusId: number;
  placedTime: Date;
  placedUserId: string;
  takenTime: Date | null;
  takenUserId: string | null;
  finishedTime: Date | null;
}
