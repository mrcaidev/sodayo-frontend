import { PLACED } from "constants/order";
import {
  IdDeleteResponse,
  IdGetResponse,
  IdPatchPayload,
  IdPatchResponse,
  IndexGetResponse,
  IndexPostPayload,
  IndexPostResponse,
} from "interfaces/api/orders";
import { Order } from "interfaces/order";
import { v4 } from "uuid";
import { requests } from "./requests";

export function createOrder(
  raw: IndexPostPayload & Pick<Order, "placedUserId">
) {
  return {
    ...raw,
    id: v4(),
    statusId: PLACED,
    placedTime: new Date(),
    takenTime: null,
    takenUserId: null,
    finishedTime: null,
  } as Order;
}

export const orderHelper = {
  getPage,
  place,
  get,
  update,
  cancel,
};

function getPage(page: number) {
  return requests.get<IndexGetResponse>(`orders?page=${page}`);
}

function place(payload: IndexPostPayload) {
  return requests.post<IndexPostResponse>("orders", payload);
}

function get(orderId: string) {
  return requests.get<IdGetResponse>(`orders/${orderId}`);
}

function update(orderId: string, payload: IdPatchPayload) {
  return requests.patch<IdPatchResponse>(`orders/${orderId}`, payload);
}

function cancel(orderId: string) {
  return requests.delete<IdDeleteResponse>(`orders/${orderId}`);
}
