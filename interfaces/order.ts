export interface Order {
  id: string;
  typeId: number;
  statusId: number;
  startDate: Date;
  endDate: Date;
  placedUserId: string;
  takenUserId: string;
  description: string;
  remark: string;
}
