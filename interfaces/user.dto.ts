import { Role } from "constants/role.constant";

export interface CreateUserDto {
  phone: string;
  password: string;
  passwordConfirmation: string;
}

export interface UpdateUserDto {
  password?: string;
  balance?: number;
  credit?: number;
  role?: Role;
  avatarUrl?: string;
  nickName?: string;
  realName?: string;
}
