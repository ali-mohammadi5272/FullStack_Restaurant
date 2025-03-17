import { EmployeeRoles } from "../enum/employeeRoles.enum";
import { Genders } from "../enum/genders.enum";

export interface EmployeeType {
  id: number;
  firstName: string;
  lastName: string;
  gender: Genders;
  role: EmployeeRoles;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
