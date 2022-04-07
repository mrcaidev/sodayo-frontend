import { expiresIn, jwtSecret } from "constants/token";
import { BackendError } from "errors/backend";
import { sign, verify } from "jsonwebtoken";

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
