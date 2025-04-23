import authController from "./controller";
import registerSchema from "../../utils/validators/Auth/register";
import loginSchema from "../../utils/validators/Auth/login";
import { FastifyInstance } from "fastify";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { LoginDtoType } from "./dto/login.dto";
import { auth } from "../../utils/middlewares/auth";
import { RegisterUserDto } from "./dto/register.dto";

const router = (server: FastifyInstance) => {
  server.post<{ Body: RegisterUserDto }>(
    "/register",
    {
      preHandler: [bodyValidator<RegisterUserDto>(registerSchema)],
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

  server.get("/me", { preHandler: [auth] }, authController.getMe);
};

export default router;
