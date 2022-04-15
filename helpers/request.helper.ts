import { LoginDto } from "interfaces/auth.dto";
import { CreateOrderDto, FindOrderDto } from "interfaces/order.dto";
import { Order } from "interfaces/order.entity";
import { CreateUserDto, UpdateUserDto } from "interfaces/user.dto";
import { User } from "interfaces/user.entity";
import { requests } from "utils/requests";

export const requestHelper = {
  login,
  getProfile,
  findUserAsPublic,
  createUser,
  updateUser,
  deleteUser,
  findOrders,
  findOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

export async function login(loginDto: LoginDto) {
  return requests.post<string>("auth/login", JSON.stringify(loginDto));
}

export async function getProfile() {
  return requests.get<User>("auth/profile");
}

export async function findUserAsPublic(id: string) {
  return requests.get<User>(`users/${id}`);
}

export async function createUser(createUserDto: CreateUserDto) {
  return requests.post<string>("users", JSON.stringify(createUserDto));
}

export async function updateUser(id: string, updateUserDto: UpdateUserDto) {
  await requests.patch(`users/${id}`, JSON.stringify(updateUserDto));
}

export async function deleteUser(id: string) {
  await requests.delete(`users/${id}`);
}

export async function findOrders(findOrderDto: FindOrderDto) {
  return requests.get<Order[]>("orders", { params: findOrderDto });
}

export async function findOrder(id: string) {
  return requests.get<Order>(`orders/${id}`);
}

export async function createOrder(createOrderDto: CreateOrderDto) {
  await requests.post("orders", JSON.stringify(createOrderDto));
}

export async function updateOrder(id: string) {
  await requests.patch(`orders/${id}`);
}

export async function deleteOrder(id: string) {
  await requests.delete(`orders/${id}`);
}
