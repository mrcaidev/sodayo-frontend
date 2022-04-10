import { StoredUser } from "interfaces/user";
import { runSQL } from "utils/database";

const sql = `
INSERT INTO
  users
VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
`;

export async function insert({
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
