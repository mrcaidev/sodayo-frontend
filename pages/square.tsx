import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { Order } from "components/Order";
import { DEFAULT_SQUARE_PAGE_SIZE } from "constants/order";
import { integratedHelper } from "helpers/integrated";
import { Order as IOrder } from "interfaces/order";
import { ChangeEvent, useEffect, useState } from "react";

export default function SquarePage() {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { loading, run } = useRequest(integratedHelper.getSquarePage, {
    manual: true,
    onSuccess: data => {
      const { error, orders } = data;
      if (error) {
        console.error(error);
        return;
      }
      setOrders(orders as IOrder[]);
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
          <Order key={order.id} order={order} />
        ))}
      </Stack>
      <Pagination
        size="large"
        count={DEFAULT_SQUARE_PAGE_SIZE}
        page={page}
        onChange={handlePageChange}
        sx={{ mt: "auto" }}
      />
    </Container>
  );
}
