import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Order } from "interfaces/order.entity";
import { DetailCard } from "./DetailCard";
import { PlacedUserCard } from "./PlacedUserCard";
import { TakenUserCard } from "./TakenUserCard";

interface Props {
  order: Order;
}

export function FullOrder({ order }: Props) {
  const { placedUser, takenUser, ...rest } = order;
  return (
    <Container
      maxWidth="md"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexWrap: "wrap",
        rowGap: 2,
        columnGap: 2,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <DetailCard {...rest} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 2,
        }}
      >
        <PlacedUserCard user={placedUser} />
        <TakenUserCard user={takenUser} />
      </Box>
    </Container>
  );
}
