import { ORDER_PAGE_SIZE } from "constants/order";
import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { isPageNum } from "utils/validator/isPageNum";

export async function getPage(page: number) {
  // Validate page.
  if (!isPageNum(page)) {
    throw new BackendError(422, "页数格式错误");
  }

  // Fetch orders.
  const orders = await OrderDao.selectAll({
    limit: ORDER_PAGE_SIZE,
    offset: (page - 1) * ORDER_PAGE_SIZE,
  });
  return orders;
}
