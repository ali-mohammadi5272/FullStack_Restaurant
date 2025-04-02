import { Contact } from "../associations";
import { CreateOneDto } from "./dto/create-one.dto";
import { AnsweredTypes } from "./enum/answered.enum";

const service = {
  async getAllCount() {
    return await Contact.count();
  },

  async getAll() {
    const count: number = await this.getAllCount();
    const contacts = await Contact.findAll({});

    return {
      contacts,
      count,
    };
  },

  async createOne(body: CreateOneDto) {
    return await Contact.create({ ...body, answered: AnsweredTypes.PENDING });
  },
};

export default service;
