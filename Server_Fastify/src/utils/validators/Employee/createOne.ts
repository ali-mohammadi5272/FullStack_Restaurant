import { mixed, object, string } from "yup";
import { EmployeeRoles } from "../../../modules/Employee/enum/employeeRoles.enum";
import { Genders } from "../../../modules/User/enum/genders.enum";

const createEmployeeSchema = object().shape({
  firstName: string().min(2).required(),
  lastName: string().min(0).required(),
  gender: mixed<Genders>().oneOf([Genders.FEMALE, Genders.MALE]).required(),
  role: mixed<EmployeeRoles>()
    .oneOf([
      EmployeeRoles.MANAGER,
      EmployeeRoles.HEAD_CHEF,
      EmployeeRoles.CHEF,
      EmployeeRoles.WAITER,
    ])
    .required(),
});

export default createEmployeeSchema;
