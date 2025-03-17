import { CreateOneEmployeeDto } from "./dto/create-one.dto";
import Employee from "./model";

const service = {
  async createOne(body: CreateOneEmployeeDto) {
    return await Employee.create(body);
  },

  async getOneByFirstNameAndLastName(
    employee: Pick<Employee, "firstName" | "lastName">
  ) {
    return await Employee.findOne({
      where: {
        firstName: employee.firstName,
        lastName: employee.lastName,
      },
    });
  },

  async getAll() {
    return await Employee.findAll();
  },

  async removeOne(employeeId: number) {
    return await Employee.destroy({ where: { id: employeeId } });
  },
};

export default service;
