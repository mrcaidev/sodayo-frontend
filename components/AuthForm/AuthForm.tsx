import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { useBoolean } from "ahooks";
import { useRef } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function AuthForm() {
  const [isLogin, { toggle: toggleForm }] = useBoolean(true);
  const containerRef = useRef(null);

  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <Slide direction="left" in={isLogin} container={containerRef.current}>
        <Box>
          <LoginForm toggleForm={toggleForm} />
        </Box>
      </Slide>
      <Slide direction="right" in={!isLogin} container={containerRef.current}>
        <Box sx={{ position: "absolute" }}>
          <RegisterForm toggleForm={toggleForm} />
        </Box>
      </Slide>
    </Box>
  );
}
