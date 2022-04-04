import { deleteOne } from "./deleteOne";
import { insertOne } from "./insertOne";
import { selectOneById } from "./selectOneById";
import { selectOneByPhone } from "./selectOneByPhone";
import { updateOne } from "./updateOne";

export const UserDao = {
  deleteOne,
  insertOne,
  selectOneById,
  selectOneByPhone,
  updateOne,
};
