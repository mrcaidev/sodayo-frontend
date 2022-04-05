import { UserDao } from "dao/user";

export async function cancel(userId: string) {
  const deleted = await UserDao.deleteById(userId);

  // On failure.
  if (!deleted) {
    return { error: "Cancellation failed" };
  }

  // On success.
  return {};
}
