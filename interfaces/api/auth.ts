import { User } from "interfaces/user";
import { CommonResponse } from "./common";

// -------------------- POST /api/auth/login ------------------------

export interface LoginPayload {
  phone: string;
  password: string;
}

export interface LoginResponse extends CommonResponse {
  token?: string;
}

// -------------------- GET /api/auth/me ----------------------------

export interface MeResponse extends CommonResponse {
  me?: User;
}
