import BookmarkIcon from "@mui/icons-material/Bookmark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useBoolean } from "ahooks";
import { orderStatus, orderType, TAKEN } from "constants/order";
import { orderHelper } from "helpers/order";
import { useAuth } from "hooks/useAuth";
import { Order } from "interfaces/order";
import { useRouter } from "next/router";
import { toOrderDate } from "utils/date";

interface Props {
  order: Order;
}

export function Order({ order }: Props) {
  const { me } = useAuth();
  const [expanded, { toggle: toggleExpanded }] = useBoolean(false);
  const router = useRouter();

  const takeOrder = async () => {
    if (!me) {
      router.push("/auth");
      return;
    }
    await orderHelper.update(order.id, {
      statusId: TAKEN,
      takenUserId: me.id,
      takenTime: new Date(),
    });
    router.reload();
  };

  return (
    <Card elevation={4} sx={{ width: "100%", flexShrink: 0 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardHeader
          avatar={
            <Avatar
              src={order.placedUser.avatarUrl ?? undefined}
              alt={order.placedUser.nickName ?? undefined}
            />
          }
          title={`${orderType[order.typeId].name} | ${toOrderDate(
            order.placedTime
          )}`}
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
          <IconButton onClick={takeOrder}>
            <CheckCircleIcon color="primary" sx={{ fontSize: 50 }} />
          </IconButton>
        </CardActions>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align="center">{order.description}</Typography>
          <Divider light sx={{ my: 1 }} />
          <Box sx={{ display: "flex", justifyContent: "center", columnGap: 1 }}>
            <Chip
              label={order.cost}
              icon={<LocalAtmIcon fontSize="small" />}
              color="info"
            />
            <Chip
              label={orderStatus[order.statusId]}
              icon={<BookmarkIcon fontSize="small" />}
              color="secondary"
            />
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}
