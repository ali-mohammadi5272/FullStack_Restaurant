import userService from "./../../modules/User/service";
import logger from "./../logger/logger";
import { Unauthorized } from "http-errors";
import { getRefreshTokenPayload } from "../helperFuncs/helperFuncs";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { RefreshTokenPayloadType } from "../helperFuncs/helperFuncs.type";

const authRefreshToken = async (req: AuthenticatedRequest) => {
  if (!req.headers.authorization) {
    logger.warn("Missing Authorization Header");
    throw new Unauthorized();
  }

  const token = req.headers.authorization.replace("Bearer ", "");
  if (!token) {
    logger.warn("Empty Bearer Token");
    throw new Unauthorized();
  }

  const payload = getRefreshTokenPayload(token);
  if (!payload || typeof payload === "string") {
    logger.warn("Invalid Token Payload");
    throw new Unauthorized();
  }

  const user = await userService.getOneById(
    (<RefreshTokenPayloadType>payload).userId
  );
  if (!user) {
    logger.warn(
      `User not found (ID: ${(<RefreshTokenPayloadType>payload).userId})`
    );
    throw new Unauthorized();
  }

  req.user = user;
  req.refreshToken = token;
};

export { authRefreshToken };
