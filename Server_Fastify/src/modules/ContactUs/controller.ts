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
    try {
      const contact = await contactService.createOne(req.body);
      if (!contact) {
        return res.status(500).send({
          statusCode: 500,
          error: "Internal Server Error",
          messages: ["Internal Server Error"],
        });
      }

      return res.status(201).send({
        statusCode: 201,
        data: null,
        messages: ["Message sent successfully"],
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  },
};

export default controller;
