import { CreateOneDto } from "./dto/create-one.dto";
import { AnsweredTypes } from "./enum/answered.enum";
import Contact from "./model";

const service = {
  async getAll() {
    return await Contact.findAll({});
  },

  async createOne(body: CreateOneDto) {
    return await Contact.create({ ...body, answered: AnsweredTypes.PENDING });
  },
};

export default service;
