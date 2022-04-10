import { LoginResponse, MeResponse } from "interfaces/api/auth";
import {
  UsersIdDeleteResponse,
  UsersIdGetResponse,
  UsersIdPatchPayload,
  UsersIdPatchResponse,
  UsersIndexPostResponse,
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
  return requests.post<UsersIndexPostResponse>("users", { phone, password });
}

function login(phone: string, password: string) {
  return requests.post<LoginResponse>("auth/login", { phone, password });
}

function me() {
  return requests.get<MeResponse>("auth/me");
}

function get(userId: string) {
  return requests.get<UsersIdGetResponse>(`users/${userId}`);
}

function update(userId: string, payload: UsersIdPatchPayload) {
  return requests.patch<UsersIdPatchResponse>(`users/${userId}`, payload);
}

function cancel(userId: string) {
  return requests.delete<UsersIdDeleteResponse>(`users/${userId}`);
}
