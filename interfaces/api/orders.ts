import { Order, StoredOrder } from "interfaces/order";
import { CommonResponse } from "./common";

// -------------------- GET /api/orders -----------------------------

export interface OrdersIndexGetParams {
  page?: string;
}

export interface OrdersIndexGetResponse extends CommonResponse {
  orders?: Order[];
}

// -------------------- POST /api/orders ----------------------------

export type OrdersIndexPostPayload = Pick<
  StoredOrder,
  "cost" | "description" | "typeId"
>;

export type OrdersIndexPostResponse = CommonResponse;

// -------------------- GET /api/orders/:id -------------------------

export interface OrdersIdGetResponse extends CommonResponse {
  order?: Order;
}

// -------------------- PATCH /api/orders/:id -----------------------

export type OrdersIdPatchPayload = Partial<
  Pick<
    StoredOrder,
    | "typeId"
    | "cost"
    | "description"
    | "statusId"
    | "takenUserId"
    | "takenTime"
    | "finishedTime"
  >
>;

export type OrdersIdPatchResponse = CommonResponse;

// -------------------- DELETE /api/orders/:id ----------------------

export type OrdersIdDeleteResponse = CommonResponse;
