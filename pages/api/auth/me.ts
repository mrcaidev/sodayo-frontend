import { BackendError } from "errors/backend";
import { MeResponse } from "interfaces/api/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { getUserIdFromHeaders } from "utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeResponse>
) {
  try {
    // Allow GET only.
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ error: "不允许的请求方法" });
      return;
    }

    // Fetch user.
    const userId = getUserIdFromHeaders(req.headers);
    const me = await UserService.getFullInfo(userId);
    res.status(200).json({ me });
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
