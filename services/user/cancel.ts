import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { isUUID } from "utils/validator/isUUID";

export async function cancel(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Delete user.
  const deleted = await UserDao.deleteById(userId);
  if (!deleted) {
    throw new BackendError(422, "用户不存在");
  }
}
