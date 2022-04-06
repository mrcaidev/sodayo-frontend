import { PatchIdPayload } from "interfaces/api/users";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { getUserIdFromReq } from "utils/requests";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let userId = "";
  try {
    userId = getUserIdFromReq(req);
  } catch (e) {
    res.status(401).json({ error: String(e) });
    return;
  }

  switch (req.method) {
    // Get this user's info.
    case "GET":
      try {
        const user = await UserService.getById(userId);
        res.status(200).json({ user });
        break;
      } catch (e) {
        res.status(400).json({ error: String(e) });
        break;
      }

    // Change part of the user's info.
    case "PATCH":
      const payload = req.body as PatchIdPayload;
      try {
        await UserService.update(userId, payload);
        res.status(200).json({});
        break;
      } catch (e) {
        res.status(400).json({ error: String(e) });
        break;
      }

    // Delete user.
    case "DELETE":
      try {
        await UserService.cancel(userId);
        res.status(200).json({});
        break;
      } catch (e) {
        res.status(400).json({ error: String(e) });
        break;
      }

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).json({ error: "不允许的请求方法" });
      break;
  }
}
