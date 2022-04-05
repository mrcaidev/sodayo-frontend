import { UserDao } from "dao/user";
import { StoredUser } from "interfaces/user";
import { isUUID } from "utils/validators/isUUID";

export async function updateProfile(
  userId: string,
  profile: Partial<StoredUser>
) {
  // If no profile is given.
  if (Object.keys(profile).length === 0) {
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

  // Override old user info with new info.
  const bundled = { ...user, ...profile } as StoredUser;
  const updated = await UserDao.update(bundled);

  // On failure.
  if (!updated) {
    throw new Error("Update failed");
  }
}
