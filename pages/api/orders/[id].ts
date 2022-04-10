import { BackendError } from "errors/backend";
import { OrdersIdPatchPayload } from "interfaces/api/orders";
import { NextApiRequest, NextApiResponse } from "next";
import { OrderService } from "services/order";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const orderId = req.query.id as string;
  try {
    switch (req.method) {
      // Get this order's info.
      case "GET": {
        const order = await OrderService.getInfo(orderId);
        res.status(200).json({ order });
        return;
      }

      // Update order info.
      case "PATCH": {
        const payload = req.body as OrdersIdPatchPayload;
        await OrderService.update(orderId, payload);
        res.status(200).json({});
        return;
      }

      // Delete order.
      case "DELETE": {
        await OrderService.cancel(orderId);
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
