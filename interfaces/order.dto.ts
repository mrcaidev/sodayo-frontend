import { PaginationQueryDto } from "./pagination-query.dto";

export interface FindOrderDto extends PaginationQueryDto {
  type?: number;
  status?: number;
}

export interface CreateOrderDto {
  type: number;
  cost: number;
  description: number;
  placedUserId: string;
}

export interface UpdateOrderDto {
  status?: number;
  takenUserId?: string;
}
