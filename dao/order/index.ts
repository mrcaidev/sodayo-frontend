import { deleteById } from "./deleteById";
import { insert } from "./insert";
import { selectAll } from "./selectAll";
import { selectById } from "./selectById";
import { selectByPlacedUserId } from "./selectByPlacedUserId";
import { selectByStatusId } from "./selectByStatusId";
import { selectByTakenUserId } from "./selectByTakenUserId";
import { selectByTypeId } from "./selectByTypeId";
import { update } from "./update";

export const OrderDao = {
  deleteById,
  insert,
  selectAll,
  selectById,
  selectByPlacedUserId,
  selectByStatusId,
  selectByTakenUserId,
  selectByTypeId,
  update,
};
