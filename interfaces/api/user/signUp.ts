import { CommonResponse } from "../common";

export interface SignUpPayload {
  phone: string;
  password: string;
}

export interface SignUpResponse extends CommonResponse {
  token?: string;
}
