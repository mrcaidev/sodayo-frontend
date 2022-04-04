export interface User {
  id: string;
  phone: string;
  nickName: string;
  realName: string;
  qq: string;
  avatarUrl: string;
  balance: number;
}

export interface StoredUser extends User {
  hashedPassword: string;
}
