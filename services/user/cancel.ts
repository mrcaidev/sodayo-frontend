import { UserDao } from "dao/user";
import { isUUID } from "utils/validators/isUUID";

export async function cancel(userId: string) {
  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

  // Delete user.
  const deleted = await UserDao.deleteById(userId);

  // On failure.
  if (!deleted) {
    throw new Error("删除失败，请稍后再试");
  }
}
