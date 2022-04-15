import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useBoolean } from "ahooks";
import { OrderTypeMap } from "constants/order-type.constant";
import { OrderProvider } from "contexts/order.context";
import { Order } from "interfaces/order.entity";
import { ActionButton } from "./ActionButton";
import { OrderCostChip } from "./OrderCostChip";
import { OrderStatusChip } from "./OrderStatusChip";

interface Props {
  order: Order;
}

export function Order({ order }: Props) {
  const [shown, { setFalse: hideOrder }] = useBoolean(true);
  const [expanded, { toggle: toggleExpanded }] = useBoolean(false);

  return (
    <OrderProvider value={order}>
      <Collapse in={shown}>
        <Card elevation={4} sx={{ width: "100%", flexShrink: 0 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardHeader
              avatar={
                <Avatar
                  src={order.placedUser.avatarUrl ?? undefined}
                  alt={order.placedUser.nickName ?? undefined}
                />
              }
              title={`${OrderTypeMap[order.type].name} | ${new Date(
                order.placedTime
              ).toLocaleTimeString("zh-cn")}`}
              subheader={expanded ? undefined : order.description}
            />
            <CardActions>
              <IconButton
                onClick={toggleExpanded}
                sx={{
                  transform: expanded ? "rotate(180deg)" : "rotate(0)",
                  transition: "ease 0.3s",
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
              <ActionButton hideOrder={hideOrder} />
            </CardActions>
          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography align="center">{order.description}</Typography>
              <Divider light sx={{ my: 1 }} />
              <Box
                sx={{ display: "flex", justifyContent: "center", columnGap: 1 }}
              >
                <OrderCostChip />
                <OrderStatusChip />
              </Box>
            </CardContent>
          </Collapse>
        </Card>
      </Collapse>
    </OrderProvider>
  );
}
