import { SquareResponse } from "interfaces/api/square";
import { requests } from "utils/requests";

export const integratedHelper = {
  getPage,
};

function getPage(page?: number) {
  return requests.get<SquareResponse>(`square?page=${page ?? 1}`);
}
