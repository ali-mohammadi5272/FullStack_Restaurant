import { FastifyRequest } from "fastify";
import { AnyObject, ObjectSchema, ValidationError } from "yup";
import { BadRequest } from "http-errors";

const queryStringValidator =
  <T extends AnyObject>(schema: ObjectSchema<T>) =>
  async (req: FastifyRequest<{ Querystring: T }>) => {
    try {
      await schema.validate(req.query, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new BadRequest(err.errors[0]);
      }
    }
  };

export { queryStringValidator };
