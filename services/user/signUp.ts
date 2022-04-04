import { UserDao } from "dao/user";
import { StoredUser } from "interfaces/user";
import { hashPassword } from "utils/password";
import { generateToken } from "utils/token";
import { v4 } from "uuid";

async function generateNewUser(phone: string, password: string) {
  return {
    avatarUrl: "/assets/images/avatars/default.png",
    balance: 0,
    hashedPassword: await hashPassword(password),
    id: v4(),
    nickName: phone,
    phone,
    qq: "Unknown",
    realName: "Unknown",
  } as StoredUser;
}

export async function signUp(phone: string, password: string) {
  // Ensure user does not yet exist.
  const oldUser = await UserDao.selectByPhone(phone);
  if (oldUser) {
    return { error: "User already exists" };
  }

  // Create and persist new user.
  const user = await generateNewUser(phone, password);
  const inserted = await UserDao.insert(user);
  if (!inserted) {
    return { error: "Unknown error" };
  }

  // On success.
  return { token: generateToken(user.id) };
}
