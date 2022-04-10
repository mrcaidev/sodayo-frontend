import { StoredUser, User } from "interfaces/user";
import { CommonResponse } from "./common";

// -------------------- POST /api/users -----------------------------

export interface UsersIndexPostPayload {
  phone: string;
  password: string;
}

export interface UsersIndexPostResponse extends CommonResponse {
  token?: string;
}

// -------------------- GET /api/users/:id --------------------------

export interface UsersIdGetResponse extends CommonResponse {
  user?: User;
}

// -------------------- PATCH /api/users/:id ------------------------

export type UsersIdPatchPayload = Partial<
  Pick<
    StoredUser,
    | "avatarUrl"
    | "balance"
    | "credit"
    | "nickName"
    | "qq"
    | "realName"
    | "roleId"
  >
> & { password?: string };

export type UsersIdPatchResponse = CommonResponse;

// -------------------- DELETE /api/users/:id -----------------------

export type UsersIdDeleteResponse = CommonResponse;
