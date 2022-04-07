import { BackendError } from "errors/backend";
import { Order } from "interfaces/order";
import { gauss } from "utils/gauss";

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
