import { UserDao } from "dao/user";
import { User } from "interfaces/user";
import { hashPassword } from "utils/password";
import { generateToken } from "utils/token";
import { isPhone } from "utils/validators/isPhone";
import { v4 } from "uuid";

export async function register(phone: string, password: string) {
  // Validate phone.
  if (!isPhone(phone)) {
    throw new Error("不合法的手机号");
  }

  // Ensure user does not exist.
  const oldUser = await UserDao.selectByPhone(phone);
  if (oldUser) {
    throw new Error("该用户已存在");
  }

  // Create and persist new user.
  const user = {
    avatarUrl: "/assets/images/avatars/default.png",
    balance: 0,
    hashedPassword: await hashPassword(password),
    id: v4(),
    nickName: `用户${phone}`,
    phone,
    qq: "未知",
    realName: "未知",
  } as User;
  const inserted = await UserDao.insert(user);

  // On failure.
  if (!inserted) {
    throw new Error("未知错误");
  }

  // On success.
  return generateToken(user.id);
}
