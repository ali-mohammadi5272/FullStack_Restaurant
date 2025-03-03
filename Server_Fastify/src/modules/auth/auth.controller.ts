import { FastifyReply, FastifyRequest } from "fastify";
import userService from "../user/user.service";
import refreshTokenService from "../refreshToken/refreshToken.service";
import { CreateOneDtoType } from "../user/dto/create-one.dto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/helperFuncs/helperFuncs";

const controller = {
  async register(
    req: FastifyRequest<{ Body: CreateOneDtoType }>,
    res: FastifyReply
  ) {
    try {
      const isUserExistBefore = !!(await userService.getOneByUserNameOrEmail({
        userName: req.body.userName,
        email: req.body.email,
      }));

      if (isUserExistBefore) {
        return res.status(400).send({
          statusCode: 400,
          messages: ["You have been registered with this Username or Email"],
        });
      }

      const newUser = await userService.createOne(req.body);

      const refreshToken = generateRefreshToken({
        userId: newUser.id,
      });

      const accessToken = generateAccessToken({
        userId: newUser.id,
      });

      await refreshTokenService.createOne({
        token: refreshToken,
        user_id: newUser.id,
      });

      return res.status(201).send({
        statusCode: 201,
        messages: ["User created successfully"],
        data: { refreshToken, accessToken },
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error,
        messages: ["Inernal Server Error"],
      });
    }
  },
};

export default controller;
