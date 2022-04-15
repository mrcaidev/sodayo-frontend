import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { OrderType } from "constants/order-type.constant";

interface Props {
  type: OrderType;
}

export function TypeAvatar({ type }: Props) {
  switch (type) {
    case OrderType.takeout:
      return (
        <Avatar sx={{ bgcolor: "goldenrod" }}>
          <FastfoodIcon />
        </Avatar>
      );
    case OrderType.express:
      return (
        <Avatar sx={{ bgcolor: "lightgreen" }}>
          <LocalShippingIcon />
        </Avatar>
      );
    case OrderType.shop:
      return (
        <Avatar sx={{ bgcolor: "lightpink" }}>
          <ShoppingCartIcon />
        </Avatar>
      );
    case OrderType.print:
      return (
        <Avatar sx={{ bgcolor: "lightsalmon" }}>
          <PrintIcon />
        </Avatar>
      );
    case OrderType.other:
      return (
        <Avatar sx={{ bgcolor: "lightyellow" }}>
          <MoreHorizIcon />
        </Avatar>
      );

    default:
      return (
        <Avatar sx={{ bgcolor: "lightseagreen" }}>
          <QuestionMarkIcon />
        </Avatar>
      );
  }
}
