import { Order } from "interfaces/order";
import { CommonResponse } from "./common";

// -------------------- GET /api/square -----------------------------

export interface SquareParams {
  page?: string;
  typeId?: string;
}

export interface SquareResponse extends CommonResponse {
  orders?: Order[];
}
