import authController from "./controller";
import registerSchema from "../../utils/validators/Auth/register";
import loginSchema from "../../utils/validators/Auth/login";
import { FastifyInstance } from "fastify";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDtoType } from "../User/dto/create-one.dto";
import { LoginDtoType } from "./dto/login.dto";
import { auth } from "../../utils/middlewares/auth";

const router = (server: FastifyInstance) => {
  server.post<{ Body: CreateOneDtoType }>(
    "/register",
    {
      preHandler: [bodyValidator<CreateOneDtoType>(registerSchema)],
    },
    authController.register
  );

  server.post<{ Body: LoginDtoType }>(
    "/login",
    {
      preHandler: [bodyValidator<LoginDtoType>(loginSchema)],
    },
    authController.login
  );

  server.post("/logout", { preHandler: [auth] }, authController.logout);
};

export default router;
