import Category from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async getOneById(categoryId: number) {
    return await Category.findOne({
      where: { id: categoryId },
    });
  },

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
