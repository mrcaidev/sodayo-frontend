import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Chip from "@mui/material/Chip";
import { useOrderContext } from "contexts/order.context";

export function OrderCostChip() {
  const { cost } = useOrderContext();

  return (
    <Chip
      label={cost === -1 ? "面议" : cost}
      icon={<LocalAtmIcon fontSize="small" />}
      color="info"
    />
  );
}
