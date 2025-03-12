import RefreshToken from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async createOne(body: CreateOneDtoType) {
    return await RefreshToken.create(body);
  },
};

export default service;
