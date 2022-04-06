import { PostPayload } from "interfaces/api/users";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Allow POST only.
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Ensure phone and password exist.
  const { phone, password } = req.body as PostPayload;
  if (!phone || !password) {
    res.status(400).json({ error: "数据缺失" });
    return;
  }

  // Register with phone and password.
  try {
    const token = await UserService.register(phone, password);
    res.status(200).json({ token });
    return;
  } catch (e) {
    res.status(400).json({ error: String(e) });
    return;
  }
}
