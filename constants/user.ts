// User role.
export const CUSTOMER = 1;
export const COURIER = 2;
export const STAFF = 3;
export const LEADER = 4;

// User default value.
export const DEFAULT_AVATAR_URL = "/assets/images/avatars/default.png";

// Default user.
export const defaultUser = {
  id: "",
  roleId: CUSTOMER,
  phone: "",
  balance: 0,
  credit: 3,
  nickName: null,
  realName: null,
  qq: null,
  avatarUrl: null,
};
