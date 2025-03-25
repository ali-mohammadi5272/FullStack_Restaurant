import { PaginationType } from "../../../types/Pagination.type";
import { EmployeeRoles } from "../enum/employeeRoles.enum";

export interface GetAllEmployeesQueryStringDto extends PaginationType {
  "roles[]": EmployeeRoles[];
}
