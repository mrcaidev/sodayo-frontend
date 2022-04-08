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
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<FormInput> = async ({ phone, password }) => {
    const { error, token } = await login(phone, password);
    console.log(token);
    if (error) {
      setErrorMessage(error);
      return;
    }
    localStorage.setItem("token", token ?? "");
    refresh();
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: 450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar sx={{ bgcolor: "primary.main" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center" sx={{ pt: 2 }}>
        登录
      </Typography>
      <Box
        component="form"
        textAlign="center"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        open={!!errorMessage}
        autoHideDuration={5000}
        onClose={() => setErrorMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          variant="filled"
          onClose={() => setErrorMessage("")}
        >
          {errorMessage}
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
