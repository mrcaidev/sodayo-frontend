import {
  COURIER,
  CUSTOMER,
  DEFAULT_CREDIT,
  LEADER,
  STAFF,
} from "constants/user";
import { IndexPostPayload } from "interfaces/api/users";
import { User } from "interfaces/user";
import { v4 } from "uuid";
import { encryptPassword } from "./password";

export async function createUser(raw: IndexPostPayload) {
  const { phone, password } = raw;
  return {
    id: v4(),
    roleId: CUSTOMER,
    phone,
    hashedPassword: await encryptPassword(password),
    balance: 0,
    credit: DEFAULT_CREDIT,
    nickName: null,
    realName: null,
    qq: null,
    avatarUrl: null,
  } as User;
}

export function complementUser(part: Partial<User>) {
  return {
    id: "",
    roleId: 1,
    phone: "",
    balance: 0,
    credit: DEFAULT_CREDIT,
    nickName: null,
    realName: null,
    qq: null,
    avatarUrl: null,
    ...part,
  } as User;
}

export function protectUser(user: User) {
  switch (user.roleId) {
    case CUSTOMER: {
      const { avatarUrl, id, nickName, roleId } = user;
      return complementUser({ avatarUrl, id, nickName, roleId });
    }

    case COURIER:
    case STAFF:
    case LEADER: {
      const { balance, hashedPassword, ...rest } = user;
      return complementUser(rest);
    }

    default: {
      const { hashedPassword, ...rest } = user;
      return rest as User;
    }
  }
}
