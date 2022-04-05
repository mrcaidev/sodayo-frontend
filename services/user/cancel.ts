import { UserDao } from "dao/user";
import { isUUID } from "utils/validators/isUUID";

export async function cancel(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    return { error: "不合法的用户ID" };
  }

  // Delete user.
  const deleted = await UserDao.deleteById(userId);

  // On failure.
  if (!deleted) {
    return { error: "删除失败，请稍后再试" };
  }

  // On success.
  return {};
}
