import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { convertStoredUser } from "utils/user";
import { isUUID } from "utils/validator/isUUID";

export async function getFullInfo(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Fetch user.
  const storedUser = await UserDao.selectById(userId);
  if (!storedUser) {
    throw new BackendError(422, "用户不存在");
  }
  return convertStoredUser(storedUser);
}
