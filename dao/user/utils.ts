import { User } from "interfaces/user";
import { ToString } from "types/toString";

export function converter(raw: ToString<User>) {
  const { balance, ...rest } = raw;
  return { balance: Number(balance), ...rest } as User;
}
