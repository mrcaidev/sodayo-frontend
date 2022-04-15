import Chip from "@mui/material/Chip";
import { OrderStatus } from "constants/order-status.constant";

interface Props {
  status: OrderStatus;
}

export function StatusChip({ status }: Props) {
  switch (status) {
    case OrderStatus.placed:
      return <Chip label="待接单" color="primary" />;

    case OrderStatus.taken:
      return <Chip label="已接单" color="success" />;

    case OrderStatus.finished:
      return <Chip label="已完成" color="default" />;

    default:
      return <Chip label="未知" color="warning" />;
  }
}
