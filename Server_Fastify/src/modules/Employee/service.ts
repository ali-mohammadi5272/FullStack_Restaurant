import { Employee } from "../associations";
import { CreateOneEmployeeDto } from "./dto/create-one.dto";
import { Op } from "sequelize";
import { GetAllEmployeesQueryStringDto } from "./dto/get-all.dto";

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

  async getAllCount() {
    return await Employee.count();
  },

  async getAll(configs: GetAllEmployeesQueryStringDto) {
    return await Employee.findAndCountAll({
      where: {
        [Op.or]: configs["roles[]"].map((role) => ({ role })),
      },
      limit: +configs.limit,
      offset: (+configs.page - 1) * +configs.limit,
      raw: true,
    });
  },

  async getOneById(employeeId: number) {
    return await Employee.findOne({ where: { id: employeeId } });
  },

  async removeOne(employeeId: number) {
    return await Employee.destroy({ where: { id: employeeId } });
  },
};

export default service;
