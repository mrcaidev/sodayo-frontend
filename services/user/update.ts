import { UserDao } from "dao/user";
import { StoredUser } from "interfaces/user";
import { getInfo } from "./getInfo";

export async function update(
  user: Pick<StoredUser, "id"> & Partial<StoredUser>
) {
  // Ensure user ID is given.
  if (!user.id) {
    return { error: "ID not given" };
  }

  // Get old user info.
  const { error, user: oldUser } = await getInfo(user.id);
  if (error) {
    return { error };
  }

  // Override old user info with new info.
  const bundled = { ...oldUser, ...user } as StoredUser;
  const updated = await UserDao.update(bundled);

  // On failure.
  if (!updated) {
    return { error: "Update failed" };
  }

  // On success.
  return {};
}
