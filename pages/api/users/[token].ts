import { PatchPayload } from "interfaces/api/users";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { captureToken, decodeToken } from "utils/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Make sure token from headers equals that from api route.
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "缺失token" });
    return;
  }
  const { token } = req.query;
  if (token !== captureToken(authorization)) {
    res.status(403).json({ error: "无权访问" });
    return;
  }

  // Decode for user ID.
  const userId = decodeToken(token);

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
      const payload = req.body as PatchPayload;
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
