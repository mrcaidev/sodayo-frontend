import { User } from "interfaces/user";
import { gauss } from "utils/gauss";

const sql = `
UPDATE
  users
SET
  phone = $2,
  hashed_password = $3,
  nick_name = $4,
  real_name = $5,
  qq = $6,
  avatar_url = $7,
  balance = $8
WHERE
  id = $1
`;

export async function update({
  avatarUrl,
  balance,
  hashedPassword,
  id,
  nickName,
  phone,
  qq,
  realName,
}: User) {
  try {
    const result = await gauss.query(sql, [
      id,
      phone,
      hashedPassword,
      nickName,
      realName,
      qq,
      avatarUrl,
      balance,
    ]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(`UserDao.update: ${e}`);
    return false;
  }
}
