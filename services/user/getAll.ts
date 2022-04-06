import { UserDao } from "dao/user";

export async function getAll() {
  // Fetch users.
  const users = await UserDao.selectAll();

  // On failure.
  if (!users) {
    throw new Error("未知错误，请稍后再试");
  }

  // On success.
  return users;
}
