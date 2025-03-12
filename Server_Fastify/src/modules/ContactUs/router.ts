import controller from "./controller";
import createContactSchema from "../../utils/validators/Contact-us/createOne";
import { FastifyInstance } from "fastify";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDto } from "./dto/create-one.dto";

const router = (server: FastifyInstance) => {
  server.post(
    "/",
    {
      preHandler: [bodyValidator<CreateOneDto>(createContactSchema)],
    },
    controller.createOne
  );
};

export default router;
