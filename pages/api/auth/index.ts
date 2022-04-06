import { AuthPayload, AuthResponse } from "interfaces/api/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  switch (req.method) {
    case "POST":
      // Ensure phone and password exist.
      const { phone, password } = req.body as AuthPayload;
      if (!phone || !password) {
        res.status(400).json({ error: "数据缺失" });
        return;
      }

      // Get token with phone and password.
      try {
        const token = await UserService.signIn(phone, password);
        res.status(200).json({ token });
        return;
      } catch (e) {
        res.status(401).json({ error: String(e) });
        return;
      }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ error: "不允许的请求方法" });
      return;
  }
}
