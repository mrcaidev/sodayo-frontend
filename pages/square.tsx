import { Pagination } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { BriefOrder } from "components/Order";
import { OrderStatus } from "constants/order-status.constant";
import { requestHelper } from "helpers/request.helper";
import { ChangeEvent, useState } from "react";

export default function Square() {
  const [page, setPage] = useState(1);
  const changePage = (e: ChangeEvent<unknown>, value: number) => setPage(value);
  const { data: [orders, ordersCount] = [[], 0], loading } = useRequest(
    () =>
      requestHelper.findOrders({
        limit: 5,
        offset: (page - 1) * 5,
        status: OrderStatus.placed,
      }),
    {
      loadingDelay: 1000,
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
      <Stack width="100%" spacing={2}>
        {orders.map(order => (
          <BriefOrder key={order.id} order={order} />
        ))}
      </Stack>
      <Pagination
        count={Math.floor((ordersCount - 1) / 5) + 1}
        page={page}
        onChange={changePage}
        sx={{ mt: "auto" }}
        size="small"
      />
    </Container>
  );
}
