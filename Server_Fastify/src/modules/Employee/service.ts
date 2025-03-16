import { CreateOneEmployeeDto } from "./dto/create-one";
import Employee from "./model";

const service = {
  async createOne(body: CreateOneEmployeeDto) {
    return await Employee.create(body);
  },
};

export default service;
