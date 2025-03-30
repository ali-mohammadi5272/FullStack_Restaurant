import contactService from "./service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDto as CreateContactOneDto } from "./dto/create-one.dto";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";

const controller = {
  async getAll(_: FastifyRequest, res: FastifyReply) {
    const contacts = await contactService.getAll();

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: contacts,
    });
  },

  async createOne(
    req: FastifyRequest<{ Body: CreateContactOneDto }>,
    res: FastifyReply
  ) {
    await contactService.createOne(req.body);

    return createSuccessResponse(res, {
      statusCode: 201,
      message: "Message sent successfully",
      data: null,
    });
  },
};

export default controller;
