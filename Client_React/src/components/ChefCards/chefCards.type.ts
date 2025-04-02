import { EmployeeType } from "../../entities/employee.entity";
import { GetAllResponse } from "../../types/pagination.type";

export interface GetAllEmployeesResponse extends GetAllResponse {
  employees: EmployeeType[];
}
