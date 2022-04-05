import { User } from "interfaces/user";

export type UpdateProfilePayload = Omit<User, "id" | "phone">;
