const revPattern = /[^A-Z0-9+\/=]/i;

export default function isBase64(str: string) {
  const len = str.length;

  if (len % 4 !== 0 || revPattern.test(str)) {
    return false;
  }

  const firstPaddingChar = str.indexOf("=");
  return (
    firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === "=")
  );
}
