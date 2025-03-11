import Food from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async createOne(body: Omit<CreateOneDtoType, "categories">) {
    return await Food.create(body);
  },
};

export default service;
