import { FastifyRequest } from "fastify";
import { AnyObject, ObjectSchema, ValidationError } from "yup";
import { BadRequest } from "http-errors";

const formDataValidator =
  <T extends AnyObject>(schema: ObjectSchema<T>, keys: string[]) =>
  async (req: FastifyRequest) => {
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
        throw new BadRequest(err.errors[0]);
      }
    }
  };

export { formDataValidator };
