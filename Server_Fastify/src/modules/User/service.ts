import { User } from "../associations";
import { RegisterUserDto } from "../Auth/dto/register.dto";
import { Roles } from "./enum/roles.enum";
import { Op } from "sequelize";

const service = {
  async getAll() {
    const count = await this.getAllCount();
    const users = await User.findAll();
    
    return {
      users,
      count,
    };
  },

  async getAllCount() {
    return await User.count();
  },

  async getOne(userId: number) {
    return await User.findOne({ where: { id: userId } });
  },

  async getOneByUserNameOrEmail(user: Pick<User, "userName" | "email">) {
    return await User.findOne({
      where: {
        [Op.or]: [{ userName: user.userName }, { email: user.email }],
      },
    });
  },

  async getOneByIdentifier(identifier: string) {
    return await User.findOne({
      where: {
        [Op.or]: [{ userName: identifier }, { email: identifier }],
      },
    });
  },

  async createOne(body: RegisterUserDto) {
    const usersCount = await this.getAllCount();

    return await User.create({
      ...body,
      userName: body.userName.toLocaleLowerCase(),
      role: usersCount === 0 ? Roles.ADMIN : Roles.USER,
    });
  },
};

export default service;
