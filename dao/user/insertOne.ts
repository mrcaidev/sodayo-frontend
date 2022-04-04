import { StoredUser } from "interfaces/user";
import { gauss } from "utils/gauss";

const sql = `
INSERT INTO
  users
VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8)
`;

export async function insertOne({
  avatarUrl,
  balance,
  hashedPassword,
  id,
  nickName,
  phone,
  qq,
  realName,
}: StoredUser) {
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
    console.error(`UserDao.insertOne: ${e}`);
    return false;
  }
}
