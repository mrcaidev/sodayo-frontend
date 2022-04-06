import { User } from "interfaces/user";
import { CommonResponse } from "./common";

// ------------------------------ GET ------------------------------

export interface GetResponse extends CommonResponse {
  user?: User;
}

// ------------------------------ POST ------------------------------

export interface PostPayload {
  phone: string;
  password: string;
}

export interface PostResponse extends CommonResponse {
  token?: string;
}

// ------------------------------ PATCH ------------------------------

export interface PatchPayload {
  password?: string;
  nickName?: string;
  realName?: string;
  qq?: string;
  avatarUrl?: string;
  balance?: number;
}

export type PatchResponse = CommonResponse;

// ------------------------------ DELETE ------------------------------

export type DeleteResponse = CommonResponse;
