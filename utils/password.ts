import { compare, hash } from "bcrypt";

export const passwordUtils = {
  encrypt,
  verify,
};

async function encrypt(password: string) {
  return await hash(password, 10);
}

async function verify(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}
