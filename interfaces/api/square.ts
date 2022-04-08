import { Order } from "interfaces/order";
import { User } from "interfaces/user";
import { CommonResponse } from "./common";

export interface OrderAndUser {
  order: Order;
  user: User;
}

export interface SquareParams {
  page?: string;
}

export interface SquareResponse extends CommonResponse {
  orders?: OrderAndUser[];
}
