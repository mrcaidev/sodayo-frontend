export interface User {
  userId: string;
  phone: string;
  hashedPassword: string;
  nickName: string;
  realName: string;
  qq: string;
  avatarUrl: string;
  balance: number;
  placedOrderIds: string[];
  takenOrderIds: string[];
}

export type UserMutable = Omit<User, "userId" | "phone" | "hashedPassword">;
