import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9ac8e2",
    },
    secondary: {
      main: "#42b883",
    },
    background: {
      default: "#282c34",
      paper: "#20232a",
    },
    text: {
      primary: "#ddd",
    },
  },
});
