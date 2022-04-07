import { BackendError } from "errors/backend";
import { Order } from "interfaces/order";
import { gauss } from "utils/gauss";

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
  try {
    const result = await gauss.query(sql, [
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
  } catch (e) {
    console.error(e);
    throw new BackendError(503, "服务器异常，请稍后再试");
  }
}
