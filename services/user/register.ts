import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { tokenUtils } from "utils/token";
import { userUtils } from "utils/user";
import { isPhone } from "utils/validator/isPhone";

export async function register(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new BackendError(422, "手机号格式错误");
  }

  // Ensure user does not exist.
  const row = await UserDao.selectByPhone(phone);
  if (row) {
    throw new BackendError(409, "手机号已被注册");
  }

  // Create and persist new user.
  const user = await userUtils.create(phone, password);
  const inserted = await UserDao.insert(user);

  // On failure.
  if (!inserted) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }

  // On success.
  return tokenUtils.encode(user.id);
}
