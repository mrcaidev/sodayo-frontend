import { PostPayload } from "interfaces/api/users";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    // Get all users' info.
    case "GET":
      res.status(403).json({ error: "无权访问" });
      break;

    // Create a new user.
    case "POST":
      // Ensure phone and password exist.
      const { phone, password } = req.body as PostPayload;
      if (!phone || !password) {
        res.status(400).json({ error: "数据缺失" });
        break;
      }

      // Sign up with phone and password.
      try {
        const token = await UserService.signUp(phone, password);
        res.status(200).json({ token });
        break;
      } catch (e) {
        res.status(401).json({ error: String(e) });
        break;
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ error: "不允许的请求方法" });
      break;
  }
}
