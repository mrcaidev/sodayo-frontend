import { Order } from "interfaces/order";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";
import { converter } from "./utils";

const sql = `
SELECT
  id                "id",
  type_id           "typeId",
  status_id         "statusId",
  placed_time       "placedTime",
  taken_time        "takenTime",
  finished_time     "finishedTime"
  placed_user_id    "placedUserId",
  taken_user_id     "takenUserId",
  description       "description",
  cost              "cost"
FROM
  orders
WHERE
  type_id = $1
`;

export async function selectByTypeId(typeId: number) {
  try {
    const result = await gauss.query<ToString<Order>>(sql, [typeId]);
    return result.rows.map(res => converter(res));
  } catch (e) {
    console.error(`OrderDao.selectByTypeId: ${e}`);
    return;
  }
}
