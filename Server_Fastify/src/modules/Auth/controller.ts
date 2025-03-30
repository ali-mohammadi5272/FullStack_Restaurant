import userService from "../User/service";
import refreshTokenService from "../RefreshToken/service";
import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterUserDto } from "./dto/register.dto";
import { LoginDtoType } from "./dto/login.dto";
import { AuthenticatedRequest } from "../../types/AuthenticatedRequest.type";
import createHttpError from "http-errors";
import {
  createSuccessResponse,
  generateAccessToken,
  generateRefreshToken,
  isValidHashedPassword,
} from "../../utils/helperFuncs/helperFuncs";

const controller = {
  async register(
    req: FastifyRequest<{ Body: RegisterUserDto }>,
    res: FastifyReply
  ) {
    try {
      const isUserExistBefore = !!(await userService.getOneByUserNameOrEmail({
        userName: req.body.userName,
        email: req.body.email,
      }));

      if (isUserExistBefore) {
        throw createHttpError.BadRequest(
          "You have been registered with this Username or Email"
        );
      }

      const newUser = await userService.createOne(req.body);

      const refreshToken = generateRefreshToken({
        userId: newUser.id,
      });

      const accessToken = generateAccessToken({
        refreshToken,
        userId: newUser.id,
      });

      await refreshTokenService.createOne({
        token: refreshToken,
        user_id: newUser.id,
      });

      return createSuccessResponse(res, {
        statusCode: 201,
        message: "User registered successfully",
        data: {
          refreshToken,
          accessToken,
          user: {
            fullName: newUser.fullName,
          },
        },
      });
    } catch (error) {
      throw createHttpError.InternalServerError();
    }
  },

  async login(req: FastifyRequest<{ Body: LoginDtoType }>, res: FastifyReply) {
    try {
      const user = await userService.getOneByIdentifier(req.body.identifier);

      if (!user) {
        throw createHttpError.NotFound("User not Found");
      }

      const isValidPassword = await isValidHashedPassword(
        req.body.password,
        user.password
      );

      if (!isValidPassword) {
        throw createHttpError.BadRequest(
          "Username/Email or Password is not valid"
        );
      }

      const refreshToken = generateRefreshToken({
        userId: user.id,
      });

      const accessToken = generateAccessToken({
        refreshToken,
        userId: user.id,
      });

      await refreshTokenService.createOne({
        token: refreshToken,
        user_id: user.id,
      });

      return createSuccessResponse(res, {
        statusCode: 200,
        message: "Login successfully",
        data: {
          refreshToken,
          accessToken,
          user: {
            fullName: user.fullName,
          },
        },
      });
    } catch (error) {
      throw createHttpError.InternalServerError();
    }
  },

  async logout(req: AuthenticatedRequest, res: FastifyReply) {
    try {
      if (!req.refreshToken) {
        return res.status(500).send({
          statusCode: 500,
          error: "Server Error",
          messages: ["Internal Server Error"],
        });
      }

      await refreshTokenService.removeOne(req.refreshToken);

      return res.status(200).send({
        statusCode: 200,
        data: null,
        messages: ["Log out successfully"],
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error,
        messages: ["Internal Server Error"],
      });
    }
  },
};

export default controller;
