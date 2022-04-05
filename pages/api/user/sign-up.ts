import { SignUpPayload, SignUpResponse } from "interfaces/api/user/signUp";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignUpResponse>
) {
  // Allow POST only.
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Ensure phone and password exist.
  const { phone, password } = req.body as SignUpPayload;
  if (!phone || !password) {
    res.status(400).json({ error: "数据缺失" });
    return;
  }

  // Sign up.
  try {
    const token = await UserService.signUp(phone, password);
    res.status(200).json({ token });
    return;
  } catch (e) {
    res.status(401).json({ error: String(e) });
    return;
  }
}
