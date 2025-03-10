import Category from "./category.model";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async getOneByTitle(title: string) {
    return await Category.findOne({
      where: { title },
    });
  },

  async getAll() {
    return await Category.findAll();
  },

  async createOne(body: CreateOneDtoType) {
    return await Category.create(body);
  },
};

export default service;
