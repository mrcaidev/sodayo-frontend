import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Loading } from "components/Loading";
import { BriefOrder } from "components/Order";
import { useAuth } from "hooks/use-auth.hook";
import { useMyOrders } from "hooks/use-my-orders.hook";
import { SyntheticEvent, useState } from "react";

export default function Dashboard() {
  const { profile: { id } = {}, loading } = useAuth({
    redirectOnUnauth: "/auth",
  });
  const [tabIndex, setTabIndex] = useState(0);
  const myOrders = useMyOrders(id);
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
        {myOrders &&
          myOrders[tabIndex === 0 ? "placedOrders" : "takenOrders"].map(
            order => <BriefOrder key={order.id} order={order} />
          )}
      </Stack>
    </Container>
  );
}
