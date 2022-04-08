import { BackendError } from "errors/backend";
import {
  OrderAndUser,
  SquareParams,
  SquareResponse,
} from "interfaces/api/square";
import { NextApiRequest, NextApiResponse } from "next";
import { OrderService } from "services/order";
import { UserService } from "services/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SquareResponse>
) {
  try {
    // Allow GET only.
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ error: "不允许的请求方法" });
      return;
    }

    // Get page number from params.
    const { page: pageString = "1" } = req.query as SquareParams;
    const page = Number(pageString);

    // Fetch orders.
    const orders = await OrderService.getPage(page);

    // Join them with the placed user.
    const ordersAndUser = await Promise.all(
      orders.map(async order => {
        const user = await UserService.getPublicInfo(order.placedUserId);
        return { order, user } as OrderAndUser;
      })
    );

    res.status(200).json({ orders: ordersAndUser });
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
