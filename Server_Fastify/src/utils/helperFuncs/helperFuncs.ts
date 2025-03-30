import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { env } from "../env/env";
import { FastifyReply } from "fastify";
import {
  AccessTokenPayloadType,
  RefreshTokenPayloadType,
  SuccessResponseConfigs,
} from "./helperFuncs.type";

const generateAccessToken = (
  payload: Omit<AccessTokenPayloadType, "iat" | "exp">
) => {
  const token = jwt.sign(payload, env.tokens.accessToken.key, {
    expiresIn: env.tokens.accessToken.expireIn,
  });
  return token;
};

const getAccessTokenPayload = (token: string) => {
  try {
    const payload = jwt.verify(token, env.tokens.accessToken.key);
    return payload;
  } catch (error) {
    return null;
  }
};

const generateRefreshToken = (
  payload: Omit<RefreshTokenPayloadType, "iat" | "exp">
) => {
  const token = jwt.sign(payload, env.tokens.refreshToken.key, {
    expiresIn: env.tokens.refreshToken.expireIn,
  });
  return token;
};

const getRefreshTokenPayload = (token: string) => {
  try {
    const payload = jwt.verify(token, env.tokens.refreshToken.key);
    return payload;
  } catch (error) {
    return null;
  }
};

const decodedToken = (token: string) => {
  const payload = jwt.decode(token);
  return payload;
};

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

const isValidHashedPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isValidPassword = await bcrypt.compare(password, hashedPassword);

  return isValidPassword;
};

const createSuccessResponse = (
  res: FastifyReply,
  configs: SuccessResponseConfigs
) => {
  return res.status(configs.statusCode).send({
    statusCode: configs.statusCode,
    message: configs.message,
    data: configs.data,
  });
};

export {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenPayload,
  getRefreshTokenPayload,
  decodedToken,
  hashPassword,
  isValidHashedPassword,
  createSuccessResponse,
};
