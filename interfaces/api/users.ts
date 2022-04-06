import { User } from "interfaces/user";
import { CommonResponse } from "./common";

// -------------------- POST /api/users -----------------------------

export interface PostPayload {
  phone: string;
  password: string;
}

export interface PostResponse extends CommonResponse {
  token?: string;
}

// -------------------- GET /api/users/:id --------------------------

export interface GetIdResponse extends CommonResponse {
  user?: User;
}

// -------------------- PATCH /api/users/:id ------------------------

export interface PatchIdPayload {
  password?: string;
  nickName?: string;
  realName?: string;
  qq?: string;
  avatarUrl?: string;
  balance?: number;
}

export type PatchIdResponse = CommonResponse;

// -------------------- DELETE /api/users/:id -----------------------

export type DeleteIdResponse = CommonResponse;
