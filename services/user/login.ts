import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { passwordUtils } from "utils/password";
import { tokenUtils } from "utils/token";
import { userUtils } from "utils/user";
import { isPhone } from "utils/validator/isPhone";

export async function login(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new BackendError(422, "手机号格式错误");
  }

  // Ensure user exists.
  const row = await UserDao.selectByPhone(phone);
  if (!row) {
    throw new BackendError(422, "用户不存在");
  }
  const user = userUtils.fromString(row);

  // Verify password.
  const { id, hashedPassword } = user;
  const isPasswordEqual = await passwordUtils.verify(
    password,
    hashedPassword as string
  );
  if (!isPasswordEqual) {
    throw new BackendError(401, "密码错误");
  }

  // On success.
  return tokenUtils.encode(id);
}
