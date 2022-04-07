import { ORDER_PAGE_SIZE } from "constants/order";
import { SelectConfig } from "interfaces/database";
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
LIMIT
  $1
OFFSET
  $2
`;

export async function selectAll(config: SelectConfig = {}) {
  const { limit = ORDER_PAGE_SIZE, offset = 0 } = config;
  const result = await runSQL<Order>(sql, [limit, offset]);
  return result.rows;
}
