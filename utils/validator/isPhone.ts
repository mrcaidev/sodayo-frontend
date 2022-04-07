export function isPhone(str: string) {
  return /^\d{11}$/.test(str);
}
