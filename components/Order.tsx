import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useBoolean } from "ahooks";
import { Order } from "interfaces/order";
import { User } from "interfaces/user";
import { toOrderDate } from "utils/date";

interface Props {
  order: Order;
  user: User;
}

export function Order({ order, user }: Props) {
  const [expanded, { toggle: toggleExpanded }] = useBoolean(false);
  return (
    <Card elevation={4} sx={{ maxWidth: 400 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardHeader
          avatar={
            <Avatar
              src={user.avatarUrl ?? undefined}
              alt={user.nickName ?? undefined}
            />
          }
          title={order.typeId}
          subheader={toOrderDate(order.placedTime)}
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
          <IconButton>
            <CheckCircleIcon color="primary" sx={{ fontSize: 50 }} />
          </IconButton>
        </CardActions>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography component="p" variant="h6" gutterBottom>
            描述
          </Typography>
          <Typography paragraph>{order.description}</Typography>
          <Typography component="p" variant="h6" gutterBottom>
            报酬
          </Typography>
          <Typography paragraph>{order.cost}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
