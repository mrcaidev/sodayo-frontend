import { UserDao } from "dao/user";
import { userUtils } from "utils/user";

export async function getAll() {
  const rows = await UserDao.selectAll();
  const users = rows.map(row => userUtils.fromString(row));
  return users;
}
