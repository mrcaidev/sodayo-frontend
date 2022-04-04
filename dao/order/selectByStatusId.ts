import { Order } from "interfaces/order";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";
import { converter } from "./utils";

const sql = `
SELECT
  id                "id",
  type_id           "typeId",
  status_id         "statusId",
  start_time        "startTime",
  end_time          "endTime",
  placed_user_id    "placedUserId",
  taken_user_id     "takenUserId",
  description       "description",
  remark            "remark"
FROM
  orders
WHERE
  status_id = $1
`;

export async function selectByStatusId(statusId: number) {
  try {
    const result = await gauss.query<ToString<Order>>(sql, [statusId]);
    return converter(result.rows[0]);
  } catch (e) {
    console.error(`OrderDao.selectByStatusId: ${e}`);
    return {} as Order;
  }
}
