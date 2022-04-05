import { User } from "interfaces/user";
import { CommonResponse } from "../common";

export interface MeResponse extends CommonResponse {
  me?: User;
}
