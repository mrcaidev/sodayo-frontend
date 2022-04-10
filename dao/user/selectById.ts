import { StoredUser } from "interfaces/user";
import { runSQL } from "utils/database";

const sql = `
SELECT
  id                "id",
  role_id           "roleId",
  phone             "phone",
  hashed_password   "hashedPassword",
  nick_name         "nickName",
  real_name         "realName",
  qq                "qq",
  avatar_url        "avatarUrl",
  balance           "balance",
  credit            "credit"
FROM
  users
WHERE
  id = $1
`;

export async function selectById(userId: string) {
  const result = await runSQL<StoredUser>(sql, [userId]);
  return result.rows[0];
}
