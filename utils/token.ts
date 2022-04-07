import { expiresIn, jwtSecret } from "constants/token";
import { BackendError } from "errors/backend";
import { sign, TokenExpiredError, verify } from "jsonwebtoken";

export const tokenUtils = {
  encode,
  decode,
};

function encode(userId: string) {
  return sign({ userId }, jwtSecret, { expiresIn });
}

function decode(token: string) {
  try {
    const { userId } = verify(token, jwtSecret) as { userId: string };
    return userId;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      throw new BackendError(401, "令牌过期");
    }
    throw e;
  }
}
