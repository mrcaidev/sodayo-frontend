import { BackendError } from "errors/backend";
import { User } from "interfaces/user";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  id                "id",
  role_id           "roleId",
  phone             "phone",
  hashed_password   "hashedPassword",
  nick_name         "nickName",
  real_name         "realName",
  qq                "qq",
  avatar_url        "avatarUrl",
  balance           "balance",
  credit            "credit"
FROM
  users
`;

export async function selectAll() {
  try {
    const result = await gauss.query<ToString<User>>(sql);
    return result.rows;
  } catch (e) {
    console.error(e);
    throw new BackendError(503, "服务器异常，请稍后再试");
  }
}
