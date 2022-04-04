import { Order } from "interfaces/order";
import { gauss } from "utils/gauss";

const sql = `
INSERT INTO
  orders
VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9)
`;

export async function insert({
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
    console.error(`OrderDao.insert: ${e}`);
    return false;
  }
}
