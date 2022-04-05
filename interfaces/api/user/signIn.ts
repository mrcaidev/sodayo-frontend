import { CommonResponse } from "../common";

export interface SignInPayload {
  account: string;
  password: string;
}

export interface SignInResponse extends CommonResponse {
  token?: string;
}
