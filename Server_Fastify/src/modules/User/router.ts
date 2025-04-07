import userController from "./controller";
import { FastifyInstance } from "fastify";
import { GetAllUsersQueryStringDto } from "./dto/get-all.dto";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "./enum/roles.enum";

const router = (server: FastifyInstance) => {
  server.get<{ Querystring: GetAllUsersQueryStringDto }>(
    "/",
    {
      preHandler: [auth, roleAccess([Roles.ADMIN])],
    },
    userController.getAll
  );
};

export default router;
