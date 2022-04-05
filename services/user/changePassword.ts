import { UserDao } from "dao/user";
import { StoredUser } from "interfaces/user";
import { hashPassword } from "utils/password";
import { isUUID } from "utils/validators/isUUID";

export async function changePassword(userId: string, password: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    return { error: "不合法的用户ID" };
  }

  // Ensure user exists.
  const user = await UserDao.selectById(userId);
  if (!user) {
    return { error: "用户不存在" };
  }

  // Override old info with new password.
  const hashedPassword = await hashPassword(password);
  const bundled = { ...user, hashedPassword } as StoredUser;

  // Update user.
  const updated = await UserDao.update(bundled);

  // On failure.
  if (!updated) {
    return { error: "更新失败，请稍后重试" };
  }

  // On success.
  return {};
}
