import { Collapse } from "@mui/material";
import Container from "@mui/material/Container";
import { NewOrderForm, SelectOrderType } from "components/NewOrderForm";
import { useState } from "react";

export default function CreatePage() {
  const [orderType, setOrderType] = useState(-1);
  return (
    <Container maxWidth="sm" sx={{ height: "100%", mt: 10 }}>
      <Collapse in={orderType === -1}>
        <SelectOrderType setOrderType={setOrderType} />
      </Collapse>
      <Collapse in={orderType !== -1}>
        <NewOrderForm type={orderType} />
      </Collapse>
    </Container>
  );
}
