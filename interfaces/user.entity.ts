export interface User {
  id: string;
  phone: string;
  balance: number;
  credit: number;
  role: number;
  avatarUrl: string | null;
  nickName: string | null;
  realName: string | null;
}
