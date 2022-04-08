import { LoginResponse, MeResponse } from "interfaces/api/auth";
import {
  IdDeleteResponse,
  IdGetResponse,
  IdPatchPayload,
  IdPatchResponse,
  IndexPostResponse,
} from "interfaces/api/users";
import { requests } from "utils/requests";

export const userHelper = {
  register,
  login,
  me,
  get,
  update,
  cancel,
};

function register(phone: string, password: string) {
  return requests.post<IndexPostResponse>("users", { phone, password });
}

function login(phone: string, password: string) {
  return requests.post<LoginResponse>("auth/login", { phone, password });
}

function me() {
  return requests.get<MeResponse>("auth/me");
}

function get(userId: string) {
  return requests.get<IdGetResponse>(`users/${userId}`);
}

function update(userId: string, payload: IdPatchPayload) {
  return requests.patch<IdPatchResponse>(`users/${userId}`, payload);
}

function cancel(userId: string) {
  return requests.delete<IdDeleteResponse>(`users/${userId}`);
}
