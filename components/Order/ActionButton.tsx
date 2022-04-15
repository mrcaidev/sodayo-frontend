import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { useBoolean, useRequest } from "ahooks";
import { OrderStatus } from "constants/order-status.constant";
import { useOrderContext } from "contexts/order.context";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { useRouter } from "next/router";

interface Props {
  hideOrder(): void;
}

export function ActionButton({ hideOrder }: Props) {
  const { profile, loading } = useAuth();
  const [isBusy, { setFalse: setNotBusy, setTrue: setBusy }] =
    useBoolean(false);
  const { id, status } = useOrderContext();
  const router = useRouter();
  const { run, cancel } = useRequest(() => requestHelper.updateOrder(id), {
    manual: true,
    onBefore: () => {
      if (!profile) {
        cancel();
        router.push("/auth");
      }
      setBusy();
    },
    onSuccess: () => {
      hideOrder();
    },
    onFinally: () => {
      setNotBusy();
    },
  });

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <IconButton
        onClick={run}
        disabled={loading || isBusy}
        size="small"
        color="primary"
      >
        {status === OrderStatus.placed ? (
          <DoneIcon sx={{ fontSize: 40 }} />
        ) : status === OrderStatus.taken ? (
          <DoneAllIcon sx={{ fontSize: 40 }} />
        ) : (
          <DoneAllIcon sx={{ fontSize: 40 }} />
        )}
      </IconButton>
      {isBusy && (
        <CircularProgress
          color="success"
          size={60}
          sx={{
            position: "absolute",
            top: -5,
            left: -5,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
}
