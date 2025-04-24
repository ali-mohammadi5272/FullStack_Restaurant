import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";
import refreshTokenService from "./service";
import { FastifyReply } from "fastify";

const controller = {
  async getNewAccessTokenByRefreshToken(
    req: AuthenticatedRequest,
    res: FastifyReply
  ) {
    const accessToken =
      await refreshTokenService.createNewAccessTokenByRefreshToken(
        req.user!.id,
        req.refreshToken!
      );

    return createSuccessResponse(res, {
      statusCode: 201,
      message: null,
      data: accessToken,
    });
  },
};

export default controller;
