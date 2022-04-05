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
      return { error: "密码错误" };
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
      return { error: "密码错误" };
    }
    return { token: generateToken(userByNickName.id) };
  }

  // If the account is neither phone nor nick name.
  return { error: "用户不存在" };
}
