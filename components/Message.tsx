import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface Props {
  message: string;
  onClose(): void;
  severity?: AlertColor;
}

export function Message({ message, onClose, severity = "error" }: Props) {
  return (
    <Snackbar
      open={!!message}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={severity} variant="filled" onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}
