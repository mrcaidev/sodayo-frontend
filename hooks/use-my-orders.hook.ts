import { useRequest } from "ahooks";
import { requestHelper } from "helpers/request.helper";

export function useMyOrders(userId: string | undefined) {
  const { data: [placedOrders] = [[], 0] } = useRequest(
    () => requestHelper.findOrders({ placedUserId: userId }),
    { ready: userId !== undefined }
  );

  const { data: [takenOrders] = [[], 0] } = useRequest(
    () => requestHelper.findOrders({ takenUserId: userId }),
    { ready: userId !== undefined }
  );

  return { placedOrders, takenOrders };
}
