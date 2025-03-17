import { UserRoles } from "../enum/userRoles.enum";

export interface UserType {
  id: number;
  fullName: string;
  userName: string;
  email: string;
  role: UserRoles;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
