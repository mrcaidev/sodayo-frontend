import { gauss } from "utils/gauss";

const sql = `
DELETE FROM
  users
WHERE
  id = $1
`;

export async function deleteById(userId: string) {
  try {
    const result = await gauss.query(sql, [userId]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(`UserDao.deleteById: ${e}`);
    return false;
  }
}
