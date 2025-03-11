import { FastifyReply, FastifyRequest } from "fastify";
import { AnyObject, ObjectSchema, ValidationError } from "yup";

const formDataValidator =
  <T extends AnyObject>(schema: ObjectSchema<T>, keys: string[]) =>
  async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const formData = await req.formData();
      const body: Record<string, unknown> = {};

      for (const [key, value] of formData.entries()) {
        if (!(value instanceof File)) {
          body[key] = keys.includes(key) ? JSON.parse(value) : value;
        }
      }

      await schema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).send({
          statusCode: 400,
          error: err.name,
          messages: err.errors,
        });
      } else {
        return res.status(500).send({
          statusCode: 500,
          error: "Internal Server Error",
          messages: ["Internal Server Error"],
        });
      }
    }
  };

export { formDataValidator };
