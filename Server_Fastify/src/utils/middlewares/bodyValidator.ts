import { FastifyRequest } from "fastify";
import { BadRequest } from "http-errors";
import { AnyObject, ObjectSchema, ValidationError } from "yup";

const bodyValidator =
  <T extends AnyObject>(schema: ObjectSchema<T>) =>
  async (req: FastifyRequest<{ Body: T }>) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new BadRequest(err.errors[0]);
      }
    }
  };

export { bodyValidator };
