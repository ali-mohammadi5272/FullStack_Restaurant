import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDto as CreateContactOneDto } from "./dto/create-one.dto";
import contactService from "./service";

const controller = {
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
