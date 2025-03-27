import Category from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { UpdateOneDto } from "./dto/update-one.dto";

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

  async getByIds(categoryIds: number[]) {
    return await Category.findAll({
      where: {
        id: categoryIds,
      },
    });
  },

  async createOne(body: CreateOneDtoType) {
    return await Category.create(body);
  },

  async updateOne(body: UpdateOneDto, categoryId: number) {
    return await Category.update(body, { where: { id: categoryId } });
  },
};

export default service;
