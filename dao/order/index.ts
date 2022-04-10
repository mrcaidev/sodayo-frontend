import { deleteById } from "./deleteById";
import { insert } from "./insert";
import { selectById } from "./selectById";
import { selectByPlacedUserId } from "./selectByPlacedUserId";
import { selectByStatusId } from "./selectByStatusId";
import { selectByTakenUserId } from "./selectByTakenUserId";
import { update } from "./update";

export const OrderDao = {
  deleteById,
  insert,
  selectById,
  selectByPlacedUserId,
  selectByStatusId,
  selectByTakenUserId,
  update,
};
