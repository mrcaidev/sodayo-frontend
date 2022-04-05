import { cancel } from "./cancel";
import { done } from "./done";
import { getByStatus } from "./getByStatus";
import { getPlacedByUserId } from "./getPlacedByUserId";
import { getTakenByUserId } from "./getTakenByUserId";
import { place } from "./place";
import { take } from "./take";

export const OrderService = {
  cancel,
  done,
  getByStatus,
  getPlacedByUserId,
  getTakenByUserId,
  place,
  take,
};
