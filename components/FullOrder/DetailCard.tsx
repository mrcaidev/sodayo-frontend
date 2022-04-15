import DescriptionIcon from "@mui/icons-material/Description";
import PaidIcon from "@mui/icons-material/Paid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { OrderStatus } from "constants/order-status.constant";
import { OrderType } from "constants/order-type.constant";
import { StatusChip } from "./StatusChip";
import { TypeAvatar } from "./TypeAvatar";
import { TypeTitle } from "./TypeTitle";
interface Props {
  type: OrderType;
  status: OrderStatus;
  cost: number;
  description: string;
}

export function DetailCard({ type, status, cost, description }: Props) {
  return (
    <Card sx={{ p: 1 }}>
      <CardHeader
        avatar={<TypeAvatar type={type} />}
        title={<TypeTitle type={type} />}
        action={<StatusChip status={status} />}
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <PaidIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText primary={cost === -1 ? "面议" : cost} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <DescriptionIcon fontSize="large" />
            </ListItemAvatar>
            <ListItemText primary={description} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
