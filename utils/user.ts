import {
  COURIER,
  CUSTOMER,
  LEADER,
  STAFF,
  USER_DEFAULT_CREDIT,
} from "constants/user";
import { User } from "interfaces/user";
import { ToString } from "types/toString";
import { v4 } from "uuid";
import { passwordUtils } from "./password";

export const userUtils = {
  fromString,
  create,
  complement,
  protect,
};

function fromString(raw: ToString<User>) {
  return {
    ...raw,
    roleId: Number(raw.roleId),
    balance: Number(raw.balance),
    credit: Number(raw.credit),
  } as User;
}

async function create(phone: string, password: string) {
  const id = v4();
  return {
    id,
    roleId: CUSTOMER,
    phone,
    hashedPassword: await passwordUtils.encrypt(password),
    nickName: `用户${id.slice(0, 8)}`,
    realName: "未知",
    qq: "未知",
    avatarUrl: "/assets/images/avatars/default.png",
    balance: 0,
    credit: USER_DEFAULT_CREDIT,
  } as User;
}

function complement(part: Partial<User>) {
  return {
    id: "",
    roleId: 1,
    phone: "",
    nickName: "",
    realName: "",
    qq: "",
    balance: 0,
    avatarUrl: "",
    credit: 3,
    ...part,
  } as User;
}

function protect(user: User) {
  switch (user.roleId) {
    case CUSTOMER: {
      const { avatarUrl, id, nickName, roleId } = user;
      return userUtils.complement({ avatarUrl, id, nickName, roleId });
    }

    case COURIER:
    case STAFF:
    case LEADER: {
      const { balance, hashedPassword, ...rest } = user;
      return userUtils.complement(rest);
    }

    default:
      return user;
  }
}
