import userService from "./../../modules/User/service";
import { Unauthorized, NotFound, InternalServerError } from "http-errors";
import { getAccessTokenPayload } from "../helperFuncs/helperFuncs";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import { AccessTokenPayloadType } from "../helperFuncs/helperFuncs.type";

const auth = async (req: AuthenticatedRequest) => {
  try {
    if (!req.headers.authorization) {
      throw new Unauthorized();
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      throw new Unauthorized();
    }

    const tokenPayload = getAccessTokenPayload(token);
    if (!tokenPayload || typeof tokenPayload === "string") {
      throw new Unauthorized();
    }

    const user = await userService.getOne(tokenPayload.userId);
    if (!user) {
      throw new NotFound("User not found");
    }

    req.user = user;
    req.refreshToken = (<AccessTokenPayloadType>tokenPayload).refreshToken;
  } catch (error) {
    throw new InternalServerError();
  }
};

export { auth };
