import RefreshToken from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async createOne(body: CreateOneDtoType) {
    return await RefreshToken.create(body);
  },

  async removeOne(token: string) {
    return await RefreshToken.destroy({ where: { token } });
  },
};

export default service;
