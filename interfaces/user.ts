export interface StoredUser {
  id: string;
  roleId: number;
  phone: string;
  hashedPassword: string;
  balance: number;
  credit: number;
  nickName: string | null;
  realName: string | null;
  qq: string | null;
  avatarUrl: string | null;
}

export type User = Omit<StoredUser, "hashedPassword">;
