import { runSQL } from "utils/database";

const sql = `
DELETE FROM
  orders
WHERE
  id = $1
`;

export async function deleteById(orderId: string) {
  const result = await runSQL(sql, [orderId]);
  return result.rowCount === 1;
}
