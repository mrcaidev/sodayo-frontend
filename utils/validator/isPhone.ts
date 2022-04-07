export function isPhone(phone: string) {
  return /^\d{11}$/.test(phone);
}
