import { UserDao } from "dao/user";
import { isUUID } from "utils/validators/isUUID";

export async function getInfo(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

  // Fetch user.
  const user = await UserDao.selectById(userId);

  // On failure.
  if (!user) {
    throw new Error("用户不存在");
  }

  // On success.
  return user;
}
