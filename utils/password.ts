export async function hashPassword(password: string) {
  // TODO: Encrypt password with bcrypt.
  return password;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  // TODO: Verify password with bcrypt.
  return password === hashedPassword;
}
