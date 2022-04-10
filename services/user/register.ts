import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { encryptToken } from "utils/token";
import { createUser } from "utils/user";
import { isPhone } from "utils/validator/isPhone";

export async function register(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new BackendError(422, "手机号格式错误");
  }

  // Ensure user does not exist.
  const oldUser = await UserDao.selectByPhone(phone);
  if (oldUser) {
    throw new BackendError(409, "手机号已被注册");
  }

  // Create and persist new user.
  const userToStore = await createUser({ phone, password });
  const inserted = await UserDao.insert(userToStore);

  // On failure.
  if (!inserted) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }

  // On success.
  return encryptToken(userToStore.id);
}
