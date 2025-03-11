import { CreateOneDto } from "./dto/create-one.dto";
import FoodCategory from "./model";

const service = {
  async createOne(body: CreateOneDto) {
    return await FoodCategory.create(body);
  },

  async createMany(body: CreateOneDto[]) {
    return await FoodCategory.bulkCreate(body);
  },
};

export default service;
