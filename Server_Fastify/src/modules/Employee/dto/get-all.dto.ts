import { PaginationType } from "../../../types/Pagination.type";
import { EmployeeRoles } from "../enum/employeeRoles.enum";

export interface GetAllEmployeesQueryStringDto extends Partial<PaginationType> {
  "roles[]": EmployeeRoles[];
}
