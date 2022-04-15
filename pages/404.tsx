import Container from "@mui/material/Container";
import Image from "next/image";
import notFoundSvg from "public/assets/images/404.svg";

export default function NotFoundPage() {
  return (
    <Container maxWidth="md" sx={{ my: "auto" }}>
      <Image src={notFoundSvg} alt="" priority />
    </Container>
  );
}
