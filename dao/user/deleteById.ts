import { BackendError } from "errors/backend";
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
    console.error(e);
    throw new BackendError(503, "服务器异常，请稍后再试");
  }
}
