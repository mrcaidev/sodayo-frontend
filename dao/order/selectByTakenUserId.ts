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
  taken_user_id = $1
`;

export async function selectByTakenUserId(userId: string) {
  try {
    const result = await gauss.query<ToString<Order>>(sql, [userId]);
    return result.rows.map(res => converter(res));
  } catch (e) {
    console.error(`OrderDao.selectByTakenUserId: ${e}`);
    return;
  }
}
