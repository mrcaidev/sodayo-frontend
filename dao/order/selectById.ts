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
  id = $1
`;

export async function selectById(orderId: string) {
  try {
    const result = await gauss.query<ToString<Order>>(sql, [orderId]);
    return converter(result.rows[0]);
  } catch (e) {
    console.error(`OrderDao.selectById: ${e}`);
    return {} as Order;
  }
}
