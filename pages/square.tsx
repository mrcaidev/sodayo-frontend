import { Pagination } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { Order } from "components/Order";
import { OrderStatus } from "constants/order-status.constant";
import { requestHelper } from "helpers/request.helper";
import { ChangeEvent, useState } from "react";

export default function Square() {
  const [page, setPage] = useState(1);
  const changePage = (e: ChangeEvent<unknown>, value: number) => setPage(value);
  const { data: orders, loading } = useRequest(
    () =>
      requestHelper.findOrders({
        limit: 5,
        offset: (page - 1) * 5,
        status: OrderStatus.placed,
      }),
    {
      refreshDeps: [page],
    }
  );

  if (loading || !orders) {
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
      <Stack width="100%">
        {orders.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </Stack>
      <Pagination
        count={10}
        page={page}
        onChange={changePage}
        sx={{ mt: "auto" }}
        size="small"
      />
    </Container>
  );
}
