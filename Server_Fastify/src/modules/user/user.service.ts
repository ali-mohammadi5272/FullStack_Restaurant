import User from "./user.model";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { Roles } from "./enum/roles.enum";

const service = {
  async getAll() {
    return await User.findAll();
  },

  async getAllCount() {
    return User.count();
  },

  async getOne(userId: number) {
    return await User.findOne({ where: { id: userId } });
  },

  async createOne(body: CreateOneDtoType) {
    const usersCount = await this.getAllCount();

    return await User.create({
      ...body,
      role: usersCount === 0 ? Roles.ADMIN : Roles.USER,
    });
  },
};

export default service;
