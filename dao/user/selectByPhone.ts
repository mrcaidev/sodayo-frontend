import { User } from "interfaces/user";
import { runSQL } from "utils/database";

const sql = `
SELECT
  id              "id",
  role_id         "roleId",
  phone           "phone",
  hashed_password "hashedPassword",
  nick_name       "nickName",
  real_name       "realName",
  qq              "qq",
  avatar_url      "avatarUrl",
  balance         "balance",
  credit          "credit"
FROM
  users
WHERE
  phone = $1
`;

export async function selectByPhone(phone: string) {
  const result = await runSQL<User>(sql, [phone]);
  return result.rows[0];
}
