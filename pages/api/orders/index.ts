import { BackendError } from "errors/backend";
import { IndexGetParams, IndexPostPayload } from "interfaces/api/orders";
import { NextApiRequest, NextApiResponse } from "next";
import { OrderService } from "services/order";
import { getUserIdFromHeaders } from "utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      // Get all orders.
      case "GET": {
        const { page = 1 } = req.query as IndexGetParams;
        const orders = await OrderService.getPage(page);
        res.status(200).json({ orders });
        return;
      }

      // Create a new order.
      case "POST": {
        // Ensure initializing params exist.
        const payload = req.body as IndexPostPayload;
        if (
          payload.cost === undefined ||
          payload.description === undefined ||
          payload.typeId === undefined
        ) {
          res.status(400).json({ error: "数据缺失" });
          return;
        }

        // Place the order.
        const placedUserId = getUserIdFromHeaders(req.headers);
        await OrderService.place({ ...payload, placedUserId });
        res.status(200).json({});
        return;
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"]);
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
