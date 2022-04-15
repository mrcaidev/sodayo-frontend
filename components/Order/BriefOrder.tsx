import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Modal from "@mui/material/Modal";
import { useBoolean } from "ahooks";
import { Order } from "interfaces/order.entity";
import { ActionButton } from "./ActionButton";
import { FullOrder } from "./FullOrder";
import { TypeTitle } from "./TypeTitle";

interface Props {
  order: Order;
}

export function BriefOrder({ order }: Props) {
  const [shouldShowFull, { setTrue: showFull, setFalse: hideFull }] =
    useBoolean(false);
  const { placedUser, type, description, id, status } = order;
  const avatarUrl = placedUser.avatarUrl || undefined;
  const nickName =
    placedUser.nickName ||
    `用户${placedUser.phone.slice(placedUser.phone.length - 4)}`;

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardActionArea onClick={showFull}>
          <CardHeader
            avatar={<Avatar src={avatarUrl} alt={nickName} />}
            title={<TypeTitle type={type} />}
            subheader={description}
          />
        </CardActionArea>
        <CardActions>
          <ActionButton id={id} status={status} />
        </CardActions>
      </Card>
      <Modal open={shouldShowFull} onClose={hideFull}>
        <FullOrder order={order} />
      </Modal>
    </>
  );
}
