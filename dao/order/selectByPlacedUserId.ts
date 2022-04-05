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
  placed_user_id = $1
`;

export async function selectByPlacedUserId(userId: string) {
  try {
    const result = await gauss.query<ToString<Order>>(sql, [userId]);
    return result.rows.map(res => converter(res));
  } catch (e) {
    console.error(`OrderDao.selectByPlacedUserId: ${e}`);
    return;
  }
}
