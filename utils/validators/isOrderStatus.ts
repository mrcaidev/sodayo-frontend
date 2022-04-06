import { FINISHED, PLACED, TAKEN } from "constants/orderStatus";

export function isOrderStatus(status: number) {
  return [PLACED, TAKEN, FINISHED].includes(status);
}
