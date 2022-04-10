import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { Order } from "components/Order";
import { ORDER_PAGE_SIZE } from "constants/order";
import { integratedHelper } from "helpers/integrated";
import { OrderAndUser } from "interfaces/api/square";
import { ChangeEvent, useEffect, useState } from "react";

export default function SquarePage() {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState<OrderAndUser[]>([]);
  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
  useEffect(() => run(page), [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} width="100%">
        {orders.map(order => (
          <Order key={order.order.id} {...order} />
        ))}
      </Stack>
      <Pagination
        size="large"
        count={ORDER_PAGE_SIZE}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: "auto" }}
      />
    </Container>
  );
}
