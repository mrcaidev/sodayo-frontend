import { cancel } from "./cancel";
import { finish } from "./finish";
import { getByStatus } from "./getByStatus";
import { getPlacedByUserId } from "./getPlacedByUserId";
import { getTakenByUserId } from "./getTakenByUserId";
import { place } from "./place";
import { take } from "./take";

export const OrderService = {
  cancel,
  done: finish,
  getByStatus,
  getPlacedByUserId,
  getTakenByUserId,
  place,
  take,
};
