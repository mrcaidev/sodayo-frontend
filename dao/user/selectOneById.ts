import { StoredUser } from "interfaces/user";
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
WHERE
  id = $1
`;

export async function selectOneById(userId: string) {
  try {
    const result = await gauss.query<ToString<StoredUser>>(sql, [userId]);
    return converter(result.rows[0]);
  } catch (e) {
    console.error(`UserDao.selectOneById: ${e}`);
    return {} as StoredUser;
  }
}
