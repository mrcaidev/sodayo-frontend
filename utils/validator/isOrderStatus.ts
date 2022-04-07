import { FINISHED, PLACED, TAKEN } from "constants/order";

export function isOrderStatus(status: number) {
  return [PLACED, TAKEN, FINISHED].includes(status);
}
