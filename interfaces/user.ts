export interface User {
  id: string;
  phone: string;
  hashedPassword: string;
  nickName: string;
  realName: string;
  qq: string;
  avatarUrl: string;
  balance: number;
}

export type UserMutable = Omit<User, "userId" | "phone" | "hashedPassword">;
