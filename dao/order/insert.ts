import { Order } from "interfaces/order";
import { runSQL } from "utils/database";

const sql = `
INSERT INTO
  orders
VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
`;

export async function insert({
  cost,
  description,
  finishedTime,
  id,
  placedTime,
  placedUserId,
  statusId,
  takenTime,
  takenUserId,
  typeId,
}: Order) {
  const result = await runSQL(sql, [
    id,
    typeId,
    statusId,
    placedTime,
    takenTime,
    finishedTime,
    placedUserId,
    takenUserId,
    description,
    cost,
  ]);
  return result.rowCount === 1;
}
