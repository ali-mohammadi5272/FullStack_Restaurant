import contactService from "./service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDto as CreateContactOneDto } from "./dto/create-one.dto";

const controller = {
  async getAll(_: FastifyRequest, res: FastifyReply) {
    try {
      const contacts = await contactService.getAll();

      return res.status(200).send({
        statusCode: 200,
        messages: [],
        data: contacts,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error,
        messages: ["Internal Server Error"],
      });
    }
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
