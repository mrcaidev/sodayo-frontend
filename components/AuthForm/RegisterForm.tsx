import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRequest } from "ahooks";
import { Message } from "components/Message";
import { requestHelper } from "helpers/request.helper";
import { useAuth } from "hooks/use-auth.hook";
import { useToken } from "hooks/use-token.hook";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormInput {
  phone: string;
  password: string;
  passwordConfirmation: string;
}

interface Props {
  toggleForm(): void;
}

export function RegisterForm({ toggleForm }: Props) {
  const { register, handleSubmit } = useForm<FormInput>();
  const { refresh } = useAuth();
  const [, setToken] = useToken();
  const router = useRouter();
  const [error, setError] = useState("");
  const { run } = useRequest(requestHelper.createUser, {
    manual: true,
    onSuccess: res => {
      setToken(res);
      refresh();
      router.push("/");
    },
    onError: err => {
      setError(err.message);
    },
  });

  return (
    <Container maxWidth="xs">
      <Avatar sx={{ bgcolor: "primary.main", mx: "auto" }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center" sx={{ pt: 2 }}>
        注册
      </Typography>
      <Box component="form" onSubmit={handleSubmit(run)}>
        <TextField
          type="tel"
          label="手机号"
          required
          inputProps={{ pattern: "^\\d{11}$" }}
          autoComplete="phone"
          autoFocus
          fullWidth
          variant="standard"
          margin="normal"
          {...register("phone")}
        />
        <TextField
          type="password"
          label="密码"
          required
          fullWidth
          variant="standard"
          margin="normal"
          {...register("password")}
        />
        <TextField
          type="password"
          label="确认密码"
          required
          fullWidth
          variant="standard"
          margin="normal"
          {...register("passwordConfirmation")}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ my: 2 }}>
          注册
        </Button>
      </Box>
      <Message message={error} onClose={() => setError("")} />
      <Box textAlign="center">
        <Button onClick={toggleForm}>已有账号？登录</Button>
      </Box>
    </Container>
  );
}
