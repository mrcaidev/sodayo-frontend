import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useLocalStorageState } from "ahooks";
import { useAuth } from "hooks/useAuth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormInput {
  phone: string;
  password: string;
  passwordConfirmation: string;
}

interface Props {
  toggleForm(): void;
}

export function RegisterForm({ toggleForm }: Props) {
  const {
    actions: { register: reg, refresh },
  } = useAuth({ redirectOnAuth: "/dashboard" });
  const { register, handleSubmit } = useForm<FormInput>();
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useLocalStorageState("token");

  const onSubmit: SubmitHandler<FormInput> = async ({
    phone,
    password,
    passwordConfirmation,
  }) => {
    if (password !== passwordConfirmation) {
      setErrorMessage("两次输入的密码不一致");
      return;
    }
    const { error, token } = await reg(phone, password);
    if (error) {
      setErrorMessage(error);
      return;
    }
    setToken(token);
    refresh();
  };

  return (
    <Container maxWidth="xs">
      <Avatar sx={{ bgcolor: "primary.main", mx: "auto" }}>
        <AppRegistrationIcon />
      </Avatar>
      <Typography component="h1" variant="h5" align="center" sx={{ pt: 2 }}>
        注册
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
        <Button onClick={toggleForm}>已有账号？登录</Button>
      </Box>
    </Container>
  );
}
