import { UserDao } from "dao/user";
import { verifyPassword } from "utils/password";
import { generateToken } from "utils/token";
import { isPhone } from "utils/validators/isPhone";

export async function login(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new Error("不合法的手机号");
  }

  // Ensure user exists.
  const user = await UserDao.selectByPhone(phone);
  if (!user) {
    throw new Error("用户不存在");
  }

  // Verify password.
  const { id, hashedPassword } = user;
  const verified = await verifyPassword(password, hashedPassword as string);
  if (!verified) {
    throw new Error("密码错误");
  }

  // On success.
  return generateToken(id);
}
