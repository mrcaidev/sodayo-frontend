import LockIcon from "@mui/icons-material/Lock";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useRequest } from "ahooks";
import { Message } from "components/Message";
import { requestHelper } from "helpers/request.helper";
import { useToken } from "hooks/use-token.hook";
import { LoginDto } from "interfaces/auth.dto";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  toggleForm(): void;
}

export function LoginForm({ toggleForm }: Props) {
  const { register, handleSubmit } = useForm<LoginDto>();
  const [, setToken] = useToken();
  const router = useRouter();
  const [error, setError] = useState("");
  const { run } = useRequest(requestHelper.login, {
    manual: true,
    onSuccess: res => {
      setToken(res);
      router.push("/");
    },
    onError: err => {
      setError(err.message);
    },
  });

  return (
    <Container maxWidth="xs">
      <Avatar sx={{ bgcolor: "primary.main", mx: "auto" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center" sx={{ pt: 2 }}>
        登录
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
          label="密码"
          type="password"
          required
          autoComplete="current-password"
          fullWidth
          variant="standard"
          margin="normal"
          {...register("password")}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ my: 2 }}>
          登录
        </Button>
      </Box>
      <Message message={error} onClose={() => setError("")} />
      <Box textAlign="center">
        <Button>
          <Link href="#">忘记密码</Link>
        </Button>
        <Button onClick={toggleForm}>马上注册</Button>
      </Box>
    </Container>
  );
}
