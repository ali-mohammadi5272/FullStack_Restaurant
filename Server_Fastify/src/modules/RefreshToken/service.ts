import { generateAccessToken } from "../../utils/helperFuncs/helperFuncs";
import { RefreshToken } from "../associations";
import { CreateOneRefreshTokenDto } from "./dto/create-one.dto";

const service = {
  async createOne(body: CreateOneRefreshTokenDto) {
    return await RefreshToken.create(body);
  },

  async removeOne(token: string) {
    return await RefreshToken.destroy({ where: { token } });
  },

  async createNewAccessTokenByRefreshToken(
    userId: number,
    refreshToken: string
  ) {
    const accessToken = generateAccessToken({
      refreshToken,
      userId,
    });

    return accessToken;
  },
};

export default service;
