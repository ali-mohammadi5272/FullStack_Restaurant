import { CreateOneEmployeeDto } from "./dto/create-one";
import Employee from "./model";

const service = {
  async createOne(body: CreateOneEmployeeDto) {
    return await Employee.create(body);
  },

  async getOneByFirstNameAndLastName(
    employee: Pick<Employee, "firstName" | "lastName">
  ) {
    await Employee.findOne({
      where: {
        firstName: employee.firstName,
        lastName: employee.lastName,
      },
    });
  },
};

export default service;
