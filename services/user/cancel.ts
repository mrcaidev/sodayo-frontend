import { UserDao } from "dao/user";

export async function cancel(userId: string) {
  const cancelled = await UserDao.deleteById(userId);

  // On failure.
  if (!cancelled) {
    return { error: "Cancellation failed" };
  }

  // On success.
  return { cancelled };
}
