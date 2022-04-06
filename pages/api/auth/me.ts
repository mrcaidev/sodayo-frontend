import { MeResponse } from "interfaces/api/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { getUserIdFromReq } from "utils/requests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeResponse>
) {
  // Allow GET only.
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: "不允许的请求方法" });
    return;
  }

  // Fetch user.
  try {
    const userId = getUserIdFromReq(req);
    const me = await UserService.getById(userId);
    res.status(200).json({ me });
    return;
  } catch (e) {
    res.status(401).json({ error: String(e) });
    return;
  }
}
