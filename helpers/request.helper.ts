import { LoginDto } from "interfaces/auth.dto";
import { CreateUserDto, UpdateUserDto } from "interfaces/user.dto";
import { User } from "interfaces/user.entity";
import { requests } from "utils/requests";

export async function loginHelper(loginDto: LoginDto) {
  const token = await requests.post<string>(
    "auth/login",
    JSON.stringify(loginDto)
  );
  localStorage.setItem("token", token);
}

export async function getProfileHelper() {
  return requests.get<User>("auth/profile");
}

export async function getUserAsPublicHelper(id: string) {
  return requests.get<User>(`users/${id}`);
}

export async function createUserHelper(createUserDto: CreateUserDto) {
  return requests.post<string>("users", JSON.stringify(createUserDto));
}

export async function updateUserHelper(
  id: string,
  updateUserDto: UpdateUserDto
) {
  return requests.patch(`users/${id}`, JSON.stringify(updateUserDto));
}

export async function deleteUserHelper(id: string) {
  return requests.delete(`users/${id}`);
}
