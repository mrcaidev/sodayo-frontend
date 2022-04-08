import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export function Footer() {
  return (
    <Box component="footer" sx={{ mt: "auto", bgcolor: "background.paper" }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            pt: 1,
            display: "flex",
            justifyContent: "center",
            columnGap: 3,
          }}
        >
          <Button sx={{ color: "gray" }}>
            <Link href="/contact">
              <a>联系我们</a>
            </Link>
          </Button>
          <Button sx={{ color: "gray" }}>
            <Link href="/faq">
              <a>常见问题</a>
            </Link>
          </Button>
          <Button sx={{ color: "gray" }}>
            <Link href="/feedback">
              <a>意见反馈</a>
            </Link>
          </Button>
          <Button sx={{ color: "gray" }}>
            <Link href="/security">
              <a>法律合规</a>
            </Link>
          </Button>
        </Box>
        <Typography align="center" color="GrayText" gutterBottom>
          苏ICP备 XXXXXXXXX | 京公网安备 XXXXXXXX
        </Typography>
        <Typography align="center" color="GrayText" gutterBottom>
          Copyright © 2022 速达优
        </Typography>
      </Container>
    </Box>
  );
}
