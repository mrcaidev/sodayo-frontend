import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { verifyPassword } from "utils/password";
import { encryptToken } from "utils/token";
import { isPhone } from "utils/validator/isPhone";

export async function login(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new BackendError(422, "手机号格式错误");
  }

  // Ensure user exists.
  const storedUser = await UserDao.selectByPhone(phone);
  if (!storedUser) {
    throw new BackendError(422, "用户不存在");
  }

  // Verify password.
  const { id, hashedPassword } = storedUser;
  const verified = await verifyPassword(password, hashedPassword as string);
  if (!verified) {
    throw new BackendError(401, "密码错误");
  }

  // On success.
  return encryptToken(id);
}
