import isBase64 from "./isBase64";

export default function isJWT(str: string) {
  const sections = str.split(".");

  if (sections.length !== 3) {
    return false;
  }

  return sections.every(isBase64);
}
