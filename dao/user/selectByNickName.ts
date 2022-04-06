import { User } from "interfaces/user";
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
  nick_name = $1
`;

export async function selectByNickName(nickName: string) {
  try {
    const result = await gauss.query<ToString<User>>(sql, [nickName]);
    return converter(result.rows[0]);
  } catch (e) {
    console.error(`UserDao.selectByNickName: ${e}`);
    return;
  }
}
