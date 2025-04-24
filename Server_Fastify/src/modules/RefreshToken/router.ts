import refreshTokenController from "./controller";
import { FastifyInstance } from "fastify";
import { authRefreshToken } from "../../utils/middlewares/authRefreshToken";

const router = (server: FastifyInstance) => {
  server.get(
    "/getNewAccessToken",
    { preHandler: [authRefreshToken] },
    refreshTokenController.getNewAccessTokenByRefreshToken
  );
};

export default router;
