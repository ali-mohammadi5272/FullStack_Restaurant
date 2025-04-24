import { RefreshToken } from "../associations";
import { CreateOneRefreshTokenDto } from "./dto/create-one.dto";

const service = {
  async createOne(body: CreateOneRefreshTokenDto) {
    return await RefreshToken.create(body);
  },

  async removeOne(token: string) {
    return await RefreshToken.destroy({ where: { token } });
  },
};

export default service;
