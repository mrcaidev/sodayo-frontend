export function toOrderDate(dateString: string | Date) {
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
