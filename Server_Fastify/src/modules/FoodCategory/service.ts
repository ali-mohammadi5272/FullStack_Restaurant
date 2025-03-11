import { CreateOneDto } from "./dto/create-one.dto";
import FoodCategory from "./model";

const service = {
  async createOne(body: CreateOneDto) {
    return await FoodCategory.create(body);
  },
};

export default service;
