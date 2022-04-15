import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { useBoolean, useRequest } from "ahooks";
import { OrderStatus } from "constants/order-status.constant";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { useRouter } from "next/router";

interface Props {
  id: string;
  status: OrderStatus;
}

export function ActionButton({ id, status }: Props) {
  const { profile, loading } = useAuth();
  const [isBusy, { setFalse: setNotBusy, setTrue: setBusy }] =
    useBoolean(false);
  const router = useRouter();
  const { run } = useRequest(() => requestHelper.updateOrder(id), {
    manual: true,
    onBefore: () => {
      if (!profile) {
        router.push("/auth");
      }
      setBusy();
    },
    onFinally: () => {
      setNotBusy();
    },
  });

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <IconButton
        onClick={run}
        disabled={loading || isBusy || status === OrderStatus.finished}
        size="small"
        color="primary"
      >
        {status === OrderStatus.placed ? (
          <DoneIcon sx={{ fontSize: 40 }} />
        ) : (
          <DoneAllIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>
      {isBusy && (
        <CircularProgress
          color="success"
          size={60}
          sx={{ position: "absolute", top: -5, left: -5, zIndex: 1 }}
        />
      )}
    </Box>
  );
}
