import { BackendError } from "errors/backend";
import { User } from "interfaces/user";
import { gauss } from "utils/gauss";

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
}: User) {
  try {
    const result = await gauss.query(sql, [
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
  } catch (e) {
    console.error(e);
    throw new BackendError(503, "服务器异常，请稍后再试");
  }
}
