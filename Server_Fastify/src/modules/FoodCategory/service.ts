import { CreateOneDtoType } from "./dto/create-one.dto";
import FoodCategory from "./model";

const service = {
  async createOne(body: CreateOneDtoType) {
    return await FoodCategory.create(body);
  },

  async createMany(body: CreateOneDtoType[]) {
    return await FoodCategory.bulkCreate(body);
  },
};

export default service;
