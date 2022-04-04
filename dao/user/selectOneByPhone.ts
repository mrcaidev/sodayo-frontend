import { StoredUser } from "interfaces/user";
import { ToString } from "types/toString";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  id              "id",
  phone           "phone",
  hashed_password "hashedPassword",
  nick_name       "nickName",
  real_name       "realName",
  qq              "qq",
  avatar_url      "avatarUrl",
  balance         "balance"
FROM
  users
WHERE
  phone = $1
`;

export async function selectOneByPhone(phone: string) {
  try {
    const result = await gauss.query<ToString<StoredUser>>(sql, [phone]);
    const { balance, ...rest } = result.rows[0];
    return { balance: Number(balance), ...rest } as StoredUser;
  } catch (e) {
    console.error(`UserDao.selectOneByPhone: ${e}`);
    return {} as StoredUser;
  }
}
