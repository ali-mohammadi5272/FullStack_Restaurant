import { EmployeeType } from "../../entities/employee.entity";
import { GetAllResponse } from "../../types/pagination.type";

export interface GetAllFoodsResponse extends GetAllResponse {
  foods: EmployeeType[];
}
