import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { User } from "interfaces/user";
import { isUUID } from "utils/validator/isUUID";

export async function getFullInfo(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new BackendError(422, "用户ID格式错误");
  }

  // Ensure user exists.
  const user = await UserDao.selectById(userId);
  if (!user) {
    throw new BackendError(422, "用户不存在");
  }

  // Protect password.
  const { hashedPassword, ...rest } = user;
  return rest as User;
}
