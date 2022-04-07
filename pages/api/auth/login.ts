import { BackendError } from "errors/backend";
import { LoginPayload, LoginResponse } from "interfaces/api/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  try {
    // Allow POST only.
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ error: "不允许的请求方法" });
      return;
    }

    // Get phone and password.
    const { phone, password } = req.body as LoginPayload;
    if (!phone || !password) {
      res.status(400).json({ error: "数据缺失" });
      return;
    }

    // Get token.
    const token = await UserService.login(phone, password);
    res.status(200).json({ token });
    return;
  } catch (e) {
    if (e instanceof BackendError) {
      res.status(e.code).json({ error: e.message });
      return;
    }
    res.status(400).json({ error: String(e) });
    return;
  }
}
