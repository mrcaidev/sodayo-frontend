import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { BriefOrder } from "components/Order";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { SyntheticEvent, useState } from "react";

export default function Dashboard() {
  const { profile: { id } = {}, loading } = useAuth({
    redirectOnUnauth: "/auth",
  });
  const [tabIndex, setTabIndex] = useState(0);
  const { data: [orders] = [[]], cancel } = useRequest(
    () => requestHelper.findOrders({ placedUserId: id, takenUserId: id }),
    {
      onBefore: () => {
        if (loading || !id) {
          cancel();
          return;
        }
      },
      refreshDeps: [id],
    }
  );
  const changeTabIndex = (e: SyntheticEvent, index: number) => {
    setTabIndex(index);
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
      <Stack spacing={2}>
        {orders &&
          orders.map(order => <BriefOrder key={order.id} order={order} />)}
      </Stack>
    </Container>
  );
}
