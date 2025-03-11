import User from "./../../modules/User/model";
import userService from "./../../modules/User/service";
import { FastifyReply, FastifyRequest } from "fastify";
import { getAccessTokenPayload } from "../helperFuncs/helperFuncs";

export interface AuthenticatedRequest extends FastifyRequest {
  user?: User;
}

const auth = async (req: AuthenticatedRequest, res: FastifyReply) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send({
        statusCode: 401,
        error: "Unauthorized",
        messages: ["Unauthorized"],
      });
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      return res.status(401).send({
        statusCode: 401,
        error: "Unauthorized",
        messages: ["Unauthorized"],
      });
    }

    const tokenPayload = getAccessTokenPayload(token);
    if (!tokenPayload || typeof tokenPayload === "string") {
      return res.status(401).send({
        statusCode: 401,
        error: "Unauthorized",
        messages: ["Unauthorized"],
      });
    }

    const user = await userService.getOne(tokenPayload.userId);
    if (!user) {
      return res.status(404).send({
        statusCode: 404,
        error: "User not found",
        messages: ["User not found"],
      });
    }

    req.user = user;
  } catch (error) {
    return res.status(500).send({
      statusCode: 500,
      error: "Internal Server Error",
      messages: ["Internal Server Error"],
    });
  }
};

export { auth };
