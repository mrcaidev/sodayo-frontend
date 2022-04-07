import { Order } from "interfaces/order";
import { runSQL } from "utils/database";

const sql = `
SELECT
  id                "id",
  type_id           "typeId",
  status_id         "statusId",
  placed_time       "placedTime",
  taken_time        "takenTime",
  finished_time     "finishedTime",
  placed_user_id    "placedUserId",
  taken_user_id     "takenUserId",
  description       "description",
  cost              "cost"
FROM
  orders
WHERE
  id = $1
`;

export async function selectById(orderId: string) {
  const result = await runSQL<Order>(sql, [orderId]);
  return result.rows[0];
}
