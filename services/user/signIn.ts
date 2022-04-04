import { UserDao } from "dao/user";
import { verifyPassword } from "utils/password";
import { generateToken } from "utils/token";

export async function signIn(account: string, password: string) {
  // Sign in by phone.
  const userByPhone = await UserDao.selectByPhone(account);
  if (userByPhone) {
    const isPasswordEqual = await verifyPassword(
      password,
      userByPhone.hashedPassword
    );
    if (!isPasswordEqual) {
      return { error: "Incorrect password" };
    }
    return { token: generateToken(userByPhone.id) };
  }

  // Sign in by nick name.
  const userByNickName = await UserDao.selectByNickName(account);
  if (userByNickName) {
    const isPasswordEqual = await verifyPassword(
      password,
      userByNickName.hashedPassword
    );
    if (!isPasswordEqual) {
      return { error: "Incorrect password" };
    }
    return { token: generateToken(userByNickName.id) };
  }

  // If account is neither phone or nick name.
  return { error: "Incorrect account" };
}
