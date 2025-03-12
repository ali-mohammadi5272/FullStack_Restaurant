import { Roles } from "../enum/roles.enum";

export interface UserType {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  role: Roles;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
