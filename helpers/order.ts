import {
  IdDeleteResponse,
  IdGetResponse,
  IdPatchPayload,
  IdPatchResponse,
  IndexGetResponse,
  IndexPostPayload,
  IndexPostResponse,
} from "interfaces/api/orders";
import { requests } from "utils/requests";

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
