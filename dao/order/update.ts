import { Order } from "interfaces/order";
import { gauss } from "utils/gauss";

const sql = `
UPDATE
  orders
SET
  type_id = $2,
  status_id = $3,
  start_time = $4,
  end_time = $5,
  placed_user_id = $6,
  taken_user_id = $7,
  description = $8,
  remark = $9
WHERE
  id = $1
`;

export async function update({
  description,
  endTime,
  id,
  placedUserId,
  remark,
  startTime,
  statusId,
  takenUserId,
  typeId,
}: Order) {
  try {
    const result = await gauss.query(sql, [
      id,
      typeId,
      statusId,
      startTime,
      endTime,
      placedUserId,
      takenUserId,
      description,
      remark,
    ]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(`OrderDao.update: ${e}`);
    return false;
  }
}
