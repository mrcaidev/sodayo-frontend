import { DONE, PENDING, TAKEN } from "constants/orderStatus";

export function isOrderStatus(status: number) {
  return [PENDING, TAKEN, DONE].includes(status);
}
