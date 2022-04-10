import { DEFAULT_SQUARE_PAGE_SIZE, PLACED } from "constants/order";
import { OrderDao } from "dao/order";
import { BackendError } from "errors/backend";
import { convertStoredOrder } from "utils/order";
import { isPageNum } from "utils/validator/isPageNum";

export async function getSquarePage(page: number) {
  // Validate page.
  if (!isPageNum(page)) {
    throw new BackendError(422, "页数格式错误");
  }

  // Fetch orders.
  const storedOrders = await OrderDao.selectByStatusId(PLACED, {
    limit: DEFAULT_SQUARE_PAGE_SIZE,
    offset: (page - 1) * DEFAULT_SQUARE_PAGE_SIZE,
  });
  return Promise.all(storedOrders.map(convertStoredOrder));
}
