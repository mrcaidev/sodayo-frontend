import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { Order } from "components/Order";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { SyntheticEvent, useState } from "react";

export default function Dashboard() {
  const { profile: { id } = {}, loading } = useAuth({
    redirectOnUnauth: "/auth",
  });
  const [tabIndex, setTabIndex] = useState(0);
  const {
    data: orders,
    cancel,
    run,
  } = useRequest(requestHelper.findOrders, {
    onBefore: () => {
      if (loading || !id) {
        cancel();
        return;
      }
    },
    refreshDeps: [id],
    defaultParams: [{ placedUserId: id }],
  });
  const changeTabIndex = (e: SyntheticEvent, index: number) => {
    setTabIndex(index);
    if (index === 0) {
      run({ placedUserId: id });
    } else if (index === 1) {
      run({ takenUserId: id });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="sm">
      <Tabs value={tabIndex} onChange={changeTabIndex} centered sx={{ my: 2 }}>
        <Tab label="我的订单" />
        <Tab label="我的接单" />
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        <Stack spacing={2}>
          {orders &&
            orders.map(order => <Order key={order.id} order={order} />)}
        </Stack>
      </Box>
    </Container>
  );
}
