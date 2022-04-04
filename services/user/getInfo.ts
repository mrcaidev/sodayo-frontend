import { UserDao } from "dao/user";

export async function getInfo(userId: string) {
  // Fetch user info.
  const user = await UserDao.selectById(userId);
  if (!user) {
    return { error: "Invalid token" };
  }

  return { user };
}
