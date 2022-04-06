import { User } from "interfaces/user";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";
import { converter } from "./utils";

const sql = `
SELECT
  id                "id",
  phone             "phone",
  hashed_password   "hashedPassword",
  nick_name         "nickName",
  real_name         "realName",
  qq                "qq",
  avatar_url        "avatarUrl",
  balance           "balance"
FROM
  users
`;

export async function selectAll() {
  try {
    const result = await gauss.query<ToString<User>>(sql);
    return result.rows.map(res => converter(res));
  } catch (e) {
    console.error(`UserDao.selectAll: ${e}`);
    return;
  }
}
