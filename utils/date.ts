export function toOrderDate(dateString: string | Date) {
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}
