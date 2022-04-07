import { Order } from "interfaces/order";
import { CommonResponse } from "./common";

// -------------------- GET /api/orders -----------------------------

export interface IndexGetParams {
  page?: number;
}

export interface IndexGetResponse extends CommonResponse {
  orders?: Order[];
}

// -------------------- POST /api/orders ----------------------------

export type IndexPostPayload = Pick<Order, "cost" | "description" | "typeId">;

export type IndexPostResponse = CommonResponse;

// -------------------- GET /api/orders/:id -------------------------

export interface IdGetResponse extends CommonResponse {
  order?: Order;
}

// -------------------- PATCH /api/orders/:id -----------------------

export type IdPatchPayload = Partial<
  Pick<Order, "cost" | "description" | "statusId" | "typeId">
>;

export type IdPatchResponse = CommonResponse;

// -------------------- DELETE /api/orders/:id ----------------------

export type IdDeleteResponse = CommonResponse;
