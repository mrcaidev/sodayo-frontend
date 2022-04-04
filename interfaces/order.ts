export interface Order {
  id: string;
  typeId: number;
  statusId: number;
  startTime: Date;
  endTime: Date;
  placedUserId: string;
  takenUserId: string;
  description: string;
  remark: string;
}
