import service from "./service";
import { FastifyReply } from "fastify";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";
import { GetAllUsersQueryStringDto } from "./dto/get-all.dto";

const controller = {
  async getAll(
    req: AuthenticatedRequest<{ Querystring: GetAllUsersQueryStringDto }>,
    res: FastifyReply
  ) {
    const users = await service.getAll(req.query);

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: users,
    });
  },
};

export default controller;
