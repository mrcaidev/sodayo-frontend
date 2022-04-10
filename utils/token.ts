import { BackendError } from "errors/backend";
import { sign, verify } from "jsonwebtoken";

export const jwtSecret = process.env.JWT_SECRET as string;
export const expiresIn = 60 * 60 * 20;

export function encryptToken(userId: string) {
  return sign({ userId }, jwtSecret, { expiresIn });
}

export function decryptToken(token: string) {
  try {
    const { userId } = verify(token, jwtSecret) as { userId: string };
    return userId;
  } catch {
    throw new BackendError(401, "令牌过期");
  }
}
