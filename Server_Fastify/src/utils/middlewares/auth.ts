import userService from "./../../modules/User/service";
import logger from "./../logger/logger";
import { Unauthorized, NotFound } from "http-errors";
import { getAccessTokenPayload } from "../helperFuncs/helperFuncs";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { AccessTokenPayloadType } from "../helperFuncs/helperFuncs.type";

const auth = async (req: AuthenticatedRequest) => {
  if (!req.headers.authorization) {
    logger.warn("Missing authorization header");
    throw new Unauthorized();
  }

  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) {
    logger.warn("Empty Bearer token");
    throw new Unauthorized();
  }

  const tokenPayload = getAccessTokenPayload(token);
  if (!tokenPayload || typeof tokenPayload === "string") {
    logger.warn("Invalid token payload");
    throw new Unauthorized();
  }

  const user = await userService.getOne(tokenPayload.userId);
  if (!user) {
    logger.warn(`User not found (ID: ${tokenPayload.userId})`);
    throw new NotFound("User not found");
  }

  req.user = user;
  req.refreshToken = (<AccessTokenPayloadType>tokenPayload).refreshToken;
};

export { auth };
