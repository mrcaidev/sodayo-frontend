import Image from "next/image";
import notFoundSvg from "public/assets/images/404.svg";

export default function NotFoundPage() {
  return <Image src={notFoundSvg} alt="" priority />;
}
