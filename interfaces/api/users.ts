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

export interface IdPatchPayload {
  roleId?: string;
  password?: string;
  nickName?: string;
  realName?: string;
  qq?: string;
  avatarUrl?: string;
  balance?: number;
  credit?: number;
}

export type IdPatchResponse = CommonResponse;

// -------------------- DELETE /api/users/:id -----------------------

export type IdDeleteResponse = CommonResponse;
