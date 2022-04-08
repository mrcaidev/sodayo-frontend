import LockIcon from "@mui/icons-material/Lock";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
  phone: string;
  password: string;
}

interface Props {
  toggleForm(): void;
}

export function LoginForm({ toggleForm }: Props) {
  const {
    actions: { login, refresh },
  } = useAuth();
  const { register, handleSubmit } = useForm<FormInput>();
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<FormInput> = async ({ phone, password }) => {
    const { error, token } = await login(phone, password);
    if (error) {
      setError(error);
      return;
    }
    localStorage.setItem("token", token ?? "");
    refresh();
  };

  return (
    <Container maxWidth="xs">
      <Avatar sx={{ bgcolor: "primary.main", mx: "auto" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center" sx={{ pt: 2 }}>
        登录
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
      <Box textAlign="center">
        <Button>
          <Link href="#">忘记密码</Link>
        </Button>
        <Button onClick={toggleForm}>马上注册</Button>
      </Box>
    </Container>
  );
}
