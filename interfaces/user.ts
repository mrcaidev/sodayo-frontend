export interface User {
  id: string;
  roleId: number;
  phone: string;
  hashedPassword?: string;
  nickName: string;
  realName: string;
  qq: string;
  avatarUrl: string;
  balance: number;
  credit: number;
}
