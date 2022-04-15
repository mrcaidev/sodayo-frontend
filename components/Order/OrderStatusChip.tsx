import BookmarkIcon from "@mui/icons-material/Bookmark";
import Chip from "@mui/material/Chip";
import { OrderStatusMap } from "constants/order-status.constant";
import { useOrderContext } from "contexts/order.context";

export function OrderStatusChip() {
  const { status } = useOrderContext();
  return (
    <Chip
      label={OrderStatusMap[status].name}
      icon={<BookmarkIcon fontSize="small" />}
      color="secondary"
    />
  );
}
