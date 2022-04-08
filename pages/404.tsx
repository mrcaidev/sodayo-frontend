import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import notFoundSvg from "public/assets/images/404.svg";

export default function NotFoundPage() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: 5,
      }}
    >
      <Image src={notFoundSvg} alt="" priority />
      <Typography component="h1" variant="h4" align="center">
        访问的页面不存在哦！
      </Typography>
    </Container>
  );
}
