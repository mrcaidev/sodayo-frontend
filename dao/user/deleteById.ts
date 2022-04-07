import { runSQL } from "utils/database";

const sql = `
DELETE FROM
  users
WHERE
  id = $1
`;

export async function deleteById(userId: string) {
  const result = await runSQL(sql, [userId]);
  return result.rowCount === 1;
}
