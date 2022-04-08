import { Order } from "interfaces/order";
import { User } from "interfaces/user";

interface Props {
  order: Order;
  user: User;
}

export function Order({ order, user }: Props) {
  return (
    // <Card elevation={4} sx={{ maxWidth: 400 }}>
    //   <CardHeader avatar={<Avatar></Avatar>} />
    //   <IconButton>
    //     <CheckCircleIcon color="primary" sx={{ fontSize: 75 }} />
    //   </IconButton>
    // </Card>
    <main>
      <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(order)}</p>
    </main>
  );
}
