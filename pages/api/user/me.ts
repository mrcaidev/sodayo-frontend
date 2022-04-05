import { MeResponse } from "interfaces/api/user/me";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { captureToken, decodeToken } from "utils/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeResponse>
) {
  // Allow GET Only.
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Ensure token exists in headers.
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "未登录" });
    return;
  }
  const token = captureToken(authorization);

  // Fetch user.
  try {
    const userId = decodeToken(token);
    const me = await UserService.getInfo(userId);
    res.status(200).json({ me });
    return;
  } catch (e) {
    res.status(401).json({ error: String(e) });
    return;
  }
}
