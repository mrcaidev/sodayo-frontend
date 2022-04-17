import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useRequest } from "ahooks";
import { Loading } from "components/Loading";
import { OrderType } from "constants/order-type.constant";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
  description: string;
  cost?: number;
}

interface Props {
  type: OrderType;
}

export function NewOrderForm({ type }: Props) {
  const {} = useAuth({ redirectOnUnauth: "/auth" });
  const router = useRouter();
  const { loading, run } = useRequest(requestHelper.createOrder, {
    onBefore: () => {},
    onSuccess: () => {
      router.push("/square");
    },
    loadingDelay: 1000,
  });
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = data => {
    const { description, cost = -1 } = data;
    run({ type, description, cost });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="订单描述"
        required
        autoFocus
        fullWidth
        margin="normal"
        {...register("description")}
      />
      <TextField
        label="报酬（不填则价格面议）"
        autoFocus
        fullWidth
        margin="normal"
        {...register("cost")}
      />
      <Button
        startIcon={<SendIcon />}
        type="submit"
        variant="contained"
        fullWidth
        sx={{ my: 2 }}
      >
        提交
      </Button>
    </Container>
  );
}
