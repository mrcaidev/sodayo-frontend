import { BackendError } from "errors/backend";
import { IdPatchPayload } from "interfaces/api/users";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "services/user";
import { assertSameUserId } from "utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      // Get this user's public info.
      case "GET": {
        const userId = req.query.id as string;
        const user = await UserService.getPublicInfo(userId);
        res.status(200).json({ user });
        return;
      }

      // Change part of the user's info.
      case "PATCH": {
        const userId = assertSameUserId(req);
        const payload = req.body as IdPatchPayload;
        await UserService.update(userId, payload);
        res.status(200).json({});
        return;
      }

      // Delete user.
      case "DELETE": {
        const userId = assertSameUserId(req);
        await UserService.cancel(userId);
        res.status(200).json({});
        return;
      }

      default: {
        res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
        res.status(405).json({ error: "不允许的请求方法" });
        return;
      }
    }
  } catch (e) {
    if (e instanceof BackendError) {
      res.status(e.code).json({ error: e.message });
      return;
    }
    res.status(400).json({ error: String(e) });
    return;
  }
}
