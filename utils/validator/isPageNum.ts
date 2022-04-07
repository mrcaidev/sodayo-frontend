export function isPageNum(page: number) {
  return typeof page === "number" && page > 0;
}
