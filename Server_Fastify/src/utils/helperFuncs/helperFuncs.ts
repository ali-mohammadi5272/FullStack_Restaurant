import jwt from "jsonwebtoken";
import { env } from "../env/env";
import { AccessTokenPayloadType } from "./helperFuncs.type";

const generateAccessToken = (payload: AccessTokenPayloadType) => {
  const token = jwt.sign(payload, env.tokens.accessToken.key, {
    expiresIn: env.tokens.accessToken.expireIn,
  });
  return token;
};

const getAccessTokenPayload = (token: string) => {
  try {
    const payload = jwt.verify(token, env.tokens.accessToken.key);
    return payload;
  } catch (err) {
    return false;
  }
};

module.exports = {
  generateAccessToken,
  getAccessTokenPayload,
};
