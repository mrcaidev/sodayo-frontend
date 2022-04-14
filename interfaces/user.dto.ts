export interface CreateUserDto {
  phone: string;
  password: string;
  passwordConfirmation: string;
}

export interface UpdateUserDto {
  password?: string;
  balance?: number;
  credit?: number;
  role?: number;
  avatarUrl?: string;
  nickName?: string;
  realName?: string;
}
