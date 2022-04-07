import { UserDao } from "dao/user";
import { BackendError } from "errors/backend";
import { IdPatchPayload } from "interfaces/api/users";
import { User } from "interfaces/user";
import { passwordUtils } from "utils/password";
import { userUtils } from "utils/user";
import { isUUID } from "utils/validator/isUUID";

export async function update(userId: string, payload: IdPatchPayload) {
  // If no profile is given.
  if (Object.keys(payload).length === 0) {
    return;
  }

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

  // Hash password if is to change.
  let hashedPassword = user.hashedPassword as string;
  if (payload.password) {
    hashedPassword = await passwordUtils.encrypt(payload.password);
  }

  // Override old info with new one.
  const newUser = { ...user, ...payload, hashedPassword } as User;
  const updated = await UserDao.update(newUser);

  // On failure.
  if (!updated) {
    throw new BackendError(500, "未知错误，请稍后再试");
  }
}
