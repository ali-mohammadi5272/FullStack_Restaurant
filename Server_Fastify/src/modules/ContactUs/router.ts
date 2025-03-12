import controller from "./controller";
import createContactSchema from "../../utils/validators/Contact-us/createOne";
import { FastifyInstance } from "fastify";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDto } from "./dto/create-one.dto";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";

const router = (server: FastifyInstance) => {
  server.get(
    "/",
    { preHandler: [auth, roleAccess([Roles.ADMIN])] },
    controller.getAll
  );

  server.post(
    "/",
    {
      preHandler: [bodyValidator<CreateOneDto>(createContactSchema)],
    },
    controller.createOne
  );
};

export default router;
