import { User } from "interfaces/user";
import { CommonResponse } from "./common";

// -------------------- POST /api/users -----------------------------

export interface IndexPostPayload {
  phone: string;
  password: string;
}

export interface IndexPostResponse extends CommonResponse {
  token?: string;
}

// -------------------- GET /api/users/:id --------------------------

export interface IdGetResponse extends CommonResponse {
  user?: User;
}

// -------------------- PATCH /api/users/:id ------------------------

export type IdPatchPayload = Partial<
  Pick<
    User,
    | "avatarUrl"
    | "balance"
    | "credit"
    | "hashedPassword"
    | "nickName"
    | "qq"
    | "realName"
    | "roleId"
  >
>;

export type IdPatchResponse = CommonResponse;

// -------------------- DELETE /api/users/:id -----------------------

export type IdDeleteResponse = CommonResponse;
