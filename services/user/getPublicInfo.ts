import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { userUtils } from "utils/user";
import { isUUID } from "utils/validator/isUUID";

export async function getPublicInfo(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Ensure user exists.
  const row = await UserDao.selectById(userId);
  if (!row) {
    throw new BackendError(422, "用户不存在");
  }
  const user = userUtils.fromString(row);

  // Protect private info.
  return userUtils.protect(user);
}
