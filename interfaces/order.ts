export interface Order {
  id: string;
  typeId: number;
  statusId: number;
  placedTime: Date;
  takenTime: Date;
  finishedTime: Date;
  placedUserId: string;
  takenUserId: string;
  description: string;
  cost: number;
}
