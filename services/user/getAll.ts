import { UserDao } from "dao/user";

export async function getAll() {
  const users = await UserDao.selectAll();
  return users;
}
