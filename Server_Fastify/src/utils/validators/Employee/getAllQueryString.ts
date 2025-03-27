import { array, number, object, mixed } from "yup";
import { EmployeeRoles } from "../../../modules/Employee/enum/employeeRoles.enum";

const employeeRoles = Object.values(EmployeeRoles);

const getAllEmployeesQueryStringSchema = object().shape({
  limit: number().min(1).required(),
  page: number().min(1).required(),
  "roles[]": array()
    .of(
      mixed<EmployeeRoles>()
        .oneOf(
          employeeRoles,
          "Roles must be one of the following values: chef, head chef, manager, waiter"
        )
        .required()
    )
    .required(),
});

export default getAllEmployeesQueryStringSchema;
