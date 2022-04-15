import Typography from "@mui/material/Typography";
import { OrderType } from "constants/order-type.constant";

interface Props {
  type: OrderType;
}

export function TypeTitle({ type }: Props) {
  switch (type) {
    case OrderType.takeout:
      return (
        <Typography component="p" variant="h6">
          外卖
        </Typography>
      );
    case OrderType.express:
      return (
        <Typography component="p" variant="h6">
          快递
        </Typography>
      );
    case OrderType.shop:
      return (
        <Typography component="p" variant="h6">
          超市
        </Typography>
      );
    case OrderType.print:
      return (
        <Typography component="p" variant="h6">
          打印
        </Typography>
      );
    case OrderType.other:
      return (
        <Typography component="p" variant="h6">
          其它
        </Typography>
      );

    default:
      return (
        <Typography component="p" variant="h6">
          未知
        </Typography>
      );
  }
}
