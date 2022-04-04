import { StoredUser } from "interfaces/user";
import { ToString } from "types/toString";

export function converter(raw: ToString<StoredUser>) {
  const { balance, ...rest } = raw;
  return { balance: Number(balance), ...rest } as StoredUser;
}
