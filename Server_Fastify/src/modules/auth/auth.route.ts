import authController from "./auth.controller";
import registerSchema from "../../utils/validators/Auth/register";
import { FastifyInstance } from "fastify";
import { env } from "../../utils/env/env";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDtoType } from "../user/dto/create-one.dto";

const router = (server: FastifyInstance) => {
  server.post(
    `${env.baseUrl}/auth/register`,
    {
      preHandler: [bodyValidator<CreateOneDtoType>(registerSchema)],
    },
    authController.register
  );
};

export default router;
