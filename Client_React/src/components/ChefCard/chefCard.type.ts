import { EmployeeRoles } from "../../enum/employeeRoles.enum";

interface ChefCardPropsType {
  firstName: string;
  lastName: string;
  role: EmployeeRoles;
  image: string;
}

export type { ChefCardPropsType };
