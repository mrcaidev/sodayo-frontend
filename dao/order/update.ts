import { Order } from "interfaces/order";
import { runSQL } from "utils/database";

const sql = `
UPDATE
  orders
SET
  type_id = $2,
  status_id = $3,
  placed_time = $4,
  taken_time = $5,
  finished_time = $6,
  placed_user_id = $7,
  taken_user_id = $8,
  description = $9,
  cost = $10
WHERE
  id = $1
`;

export async function update({
  cost,
  description,
  finishedTime,
  id,
  placedUserId,
  placedTime,
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
