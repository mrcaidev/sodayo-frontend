import { sign, TokenExpiredError, verify } from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET as string;
const expiresIn = 60 * 60 * 20;

export function generateToken(userId: string) {
  return sign({ userId }, jwtSecret, { expiresIn });
}

export function decodeToken(token: string) {
  // Decode.
  try {
    const { userId } = verify(token, jwtSecret) as { userId: string };
    return userId;
  } catch (e) {
    // If token has expired.
    if (e instanceof TokenExpiredError) {
      throw new Error("Token已失效");
    }
    // Otherwise.
    throw e;
  }
}
