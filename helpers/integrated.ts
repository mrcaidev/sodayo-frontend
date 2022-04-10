import { SquareResponse } from "interfaces/api/square";
import { requests } from "utils/requests";

export const integratedHelper = {
  getSquarePage,
};

function getSquarePage(page: number) {
  return requests.get<SquareResponse>(`square?page=${page}`);
}
