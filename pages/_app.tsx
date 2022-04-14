import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { AppProps } from "next/app";
import "styles/globals.css";
import { darkTheme } from "themes/darkTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          isolation: "isolate",
        }}
      >
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
