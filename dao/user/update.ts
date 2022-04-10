import { StoredUser } from "interfaces/user";
import { runSQL } from "utils/database";

const sql = `
UPDATE
  users
SET
  role_id = $2,
  phone = $3,
  hashed_password = $4,
  nick_name = $5,
  real_name = $6,
  qq = $7,
  avatar_url = $8,
  balance = $9,
  credit = $10
WHERE
  id = $1
`;

export async function update({
  avatarUrl,
  balance,
  credit,
  hashedPassword,
  id,
  nickName,
  phone,
  qq,
  realName,
  roleId,
}: StoredUser) {
  const result = await runSQL(sql, [
    id,
    roleId,
    phone,
    hashedPassword,
    nickName,
    realName,
    qq,
    avatarUrl,
    balance,
    credit,
  ]);
  return result.rowCount === 1;
}
