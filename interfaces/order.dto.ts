import { OrderStatus } from "constants/order-status.constant";
import { OrderType } from "constants/order-type.constant";
import { PaginationQueryDto } from "./pagination-query.dto";

export interface FindOrderDto extends PaginationQueryDto {
  type?: OrderType;
  status?: OrderStatus;
  placedUserId?: string;
  takenUserId?: string;
}

export interface CreateOrderDto {
  type: OrderType;
  cost: number;
  description: string;
}

export type UpdateOrderDto = Partial<CreateOrderDto>;
