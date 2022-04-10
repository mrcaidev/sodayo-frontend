import { COURIER, CUSTOMER, defaultUser, LEADER, STAFF } from "constants/user";
import { UsersIndexPostPayload } from "interfaces/api/users";
import { StoredUser, User } from "interfaces/user";
import { v4 } from "uuid";
import { encryptPassword } from "./password";

export async function createUser(raw: UsersIndexPostPayload) {
  const { phone, password } = raw;
  return {
    ...defaultUser,
    id: v4(),
    phone,
    hashedPassword: await encryptPassword(password),
  } as StoredUser;
}

export function complementUser(part: Partial<User>) {
  return { ...defaultUser, ...part } as User;
}

export function toPublicUser(user: StoredUser) {
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

export function convertStoredUser(user: StoredUser) {
  const { hashedPassword, ...rest } = user;
  return rest as User;
}
