import { CommonResponse } from "interfaces/api/common";
import { ChangePasswordPayload } from "interfaces/api/user/changePassword";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { captureToken, decodeToken } from "utils/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CommonResponse>
) {
  // Allow PUT only.
  if (req.method !== "PUT") {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Ensure password exists.
  const { password } = req.body as ChangePasswordPayload;
  if (!password) {
    res.status(400).json({ error: "数据缺失" });
    return;
  }

  // Ensure token exists.
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "未登录" });
    return;
  }
  const token = captureToken(authorization);

  // Change password.
  try {
    const userId = decodeToken(token);
    await UserService.changePassword(userId, password);
    res.status(200).json({});
    return;
  } catch (e) {
    res.status(400).json({ error: String(e) });
    return;
  }
}
