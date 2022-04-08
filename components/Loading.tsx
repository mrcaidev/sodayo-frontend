import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

interface Props {
  open?: boolean;
}

export function Loading({ open = true }: Props) {
  return (
    <Backdrop open={open}>
      <CircularProgress />
    </Backdrop>
  );
}
