import { CommonResponse } from "./common";

export interface AuthPayload {
  phone: string;
  password: string;
}

export interface AuthResponse extends CommonResponse {
  token?: string;
}
