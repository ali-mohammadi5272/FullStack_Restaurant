import authController from "./auth.controller";
import registerSchema from "../../utils/validators/Auth/register";
import loginSchema from "../../utils/validators/Auth/login";
import { FastifyInstance } from "fastify";
import { env } from "../../utils/env/env";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDtoType } from "../user/dto/create-one.dto";
import { LoginDtoType } from "./dto/login.dto";

const router = (server: FastifyInstance) => {
  server.post(
    `${env.baseUrl}/auth/register`,
    {
      preHandler: [bodyValidator<CreateOneDtoType>(registerSchema)],
    },
    authController.register
  );
  
  server.post(
    `${env.baseUrl}/auth/login`,
    {
      preHandler: [bodyValidator<LoginDtoType>(loginSchema)],
    },
    authController.login
  );
};

export default router;
