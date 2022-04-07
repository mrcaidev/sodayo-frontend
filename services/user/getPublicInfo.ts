import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { protectUser } from "utils/user";
import { isUUID } from "utils/validator/isUUID";

export async function getPublicInfo(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Ensure user exists.
  const user = await UserDao.selectById(userId);
  if (!user) {
    throw new BackendError(422, "用户不存在");
  }

  // Protect private info.
  return protectUser(user);
}
