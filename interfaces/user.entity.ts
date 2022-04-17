import { Role } from "constants/role.constant";

export interface User {
  id: string;
  phone: string;
  balance: number;
  credit: number;
  role: Role;
  avatarUrl: string | null;
  nickName: string | null;
  realName: string | null;
}
