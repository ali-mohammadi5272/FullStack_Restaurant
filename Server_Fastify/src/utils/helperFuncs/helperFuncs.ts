import jwt from "jsonwebtoken";
import { env } from "../env/env";
import { AccessTokenPayloadType } from "./helperFuncs.type";

const generateAccessToken = (payload: AccessTokenPayloadType) => {
  const token = jwt.sign(payload, env.tokens.accessToken.key, {
    expiresIn: env.tokens.accessToken.expireIn,
  });
  return token;
};

module.exports = {
  generateAccessToken,
};
