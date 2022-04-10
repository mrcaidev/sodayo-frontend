import { SelectConfig } from "interfaces/database";
import { StoredOrder } from "interfaces/order";
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
  placed_user_id = $1
LIMIT
  $2
OFFSET
  $3
`;

export async function selectByPlacedUserId(
  userId: string,
  config: SelectConfig = {}
) {
  const { limit = Number.MAX_SAFE_INTEGER, offset = 0 } = config;
  const result = await runSQL<StoredOrder>(sql, [userId, limit, offset]);
  return result.rows;
}
