import { Genders } from "../../User/enum/genders.enum";
import { EmployeeRoles } from "../enum/employeeRoles.enum";

export interface CreateOneEmployeeDto {
  firstName: string;
  lastName: string;
  gender: Genders;
  role: EmployeeRoles;
  image: string;
}
