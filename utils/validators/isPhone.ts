const pattern = /^\d{11}$/;

export function isPhone(str: string) {
  return pattern.test(str);
}
