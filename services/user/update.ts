import { UserDao } from "dao/user";
import { PatchPayload } from "interfaces/api/users";
import { User } from "interfaces/user";
import { hashPassword } from "utils/password";
import { isUUID } from "utils/validators/isUUID";

export async function update(userId: string, payload: PatchPayload) {
  // If no profile is given.
  if (Object.keys(payload).length === 0) {
    return;
  }

  // Validate user ID.
  if (!isUUID(userId)) {
    throw new Error("不合法的用户ID");
  }

  // Ensure user exists.
  const user = await UserDao.selectById(userId);
  if (!user) {
    throw new Error("用户不存在");
  }

  // Hash password if to change.
  let hashedPassword = user.hashedPassword as string;
  if (payload.password) {
    hashedPassword = await hashPassword(payload.password);
  }

  // Override old info with new one.
  const newUser = { ...user, ...payload, hashedPassword } as User;
  const updated = await UserDao.update(newUser);

  // On failure.
  if (!updated) {
    throw new Error("更新失败，请稍后再试");
  }
}
