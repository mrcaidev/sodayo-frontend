import {
  OrdersIdDeleteResponse,
  OrdersIdGetResponse,
  OrdersIdPatchPayload,
  OrdersIdPatchResponse,
  OrdersIndexGetResponse,
  OrdersIndexPostPayload,
  OrdersIndexPostResponse,
} from "interfaces/api/orders";
import { requests } from "utils/requests";

export const orderHelper = {
  getSquarePage,
  place,
  get,
  update,
  cancel,
};

function getSquarePage(page: number) {
  return requests.get<OrdersIndexGetResponse>(`orders?page=${page}`);
}

function place(payload: OrdersIndexPostPayload) {
  return requests.post<OrdersIndexPostResponse>("orders", payload);
}

function get(orderId: string) {
  return requests.get<OrdersIdGetResponse>(`orders/${orderId}`);
}

function update(orderId: string, payload: OrdersIdPatchPayload) {
  return requests.patch<OrdersIdPatchResponse>(`orders/${orderId}`, payload);
}

function cancel(orderId: string) {
  return requests.delete<OrdersIdDeleteResponse>(`orders/${orderId}`);
}
