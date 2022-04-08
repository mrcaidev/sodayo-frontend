import { Container } from "@mui/material";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { Order } from "components/Order";
import { integratedHelper } from "helpers/integrated";
import { OrderAndUser } from "interfaces/api/square";
import { useEffect, useState } from "react";

export default function SquarePage() {
  const [orders, setOrders] = useState<OrderAndUser[]>([]);
  const { loading, run } = useRequest(integratedHelper.getPage, {
    manual: true,
    onSuccess: data => {
      const { error, orders } = data;
      if (error) {
        console.error(error);
        return;
      }
      setOrders(orders as OrderAndUser[]);
    },
    onError: error => {
      console.error(error);
    },
  });

  // Load page 1 on first mounting.
  useEffect(() => run(1), []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {orders.map(order => (
        <Order key={order.order.id} {...order} />
      ))}
    </Container>
  );
}
