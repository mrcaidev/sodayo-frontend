import { BackendError } from "errors/backend";
import { User } from "interfaces/user";
import { gauss } from "utils/gauss";

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
