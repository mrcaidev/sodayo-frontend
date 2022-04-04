import { deleteById } from "./deleteById";
import { insert } from "./insert";
import { selectById } from "./selectById";
import { selectByNickName } from "./selectByNickName";
import { selectByPhone } from "./selectByPhone";
import { update } from "./update";

export const UserDao = {
  deleteById,
  insert,
  selectById,
  selectByNickName,
  selectByPhone,
  update,
};
