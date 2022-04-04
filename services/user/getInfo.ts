import { UserDao } from "dao/user";
import { decodeToken } from "utils/token";

export async function getInfo(token: string) {
  // Ensure token has not expired.
  const userId = decodeToken(token);
  if (!userId) {
    return { error: "Token expired" };
  }

  // Fetch user info.
  const user = await UserDao.selectById(userId);
  if (!user) {
    return { error: "Invalid token" };
  }

  return { user };
}
