import { FastifyReply, FastifyRequest } from "fastify";
import { AnyObject, ObjectSchema, ValidationError } from "yup";

const bodyValidator =
  <T extends AnyObject>(schema: ObjectSchema<T>) =>
  async (req: FastifyRequest<{ Body: T }>, res: FastifyReply) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).send({
          statusCode: 400,
          messages: err.errors,
        });
      }
    }
  };

export { bodyValidator };
