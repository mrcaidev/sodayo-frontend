import { SignInPayload, SignInResponse } from "interfaces/api/signIn";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignInResponse>
) {
  // Allow POST only.
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Ensure account and password exist.
  const { account, password } = req.body as SignInPayload;
  if (!account || !password) {
    res.status(401).json({ error: "数据缺失" });
    return;
  }

  // Sign in.
  try {
    const token = await UserService.signIn(account, password);
    res.status(200).json({ token });
    return;
  } catch (e) {
    res.status(401).json({ error: String(e) });
    return;
  }
}
