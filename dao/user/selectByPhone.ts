import { StoredUser } from "interfaces/user";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";
import { converter } from "./utils";

const sql = `
SELECT
  id              "id",
  phone           "phone",
  hashed_password "hashedPassword",
  nick_name       "nickName",
  real_name       "realName",
  qq              "qq",
  avatar_url      "avatarUrl",
  balance         "balance"
FROM
  users
WHERE
  phone = $1
`;

export async function selectByPhone(phone: string) {
  try {
    const result = await gauss.query<ToString<StoredUser>>(sql, [phone]);
    return converter(result.rows[0]);
  } catch (e) {
    console.error(`UserDao.selectByPhone: ${e}`);
    return;
  }
}
