import Food from "./model";
import { CreateOneDtoType } from "./dto/create-one.dto";
import Category from "../Category/model";

const service = {
  async createOne(body: Omit<CreateOneDtoType, "categories">) {
    return await Food.create(body);
  },

  async getAll() {
    return await Food.findAll({
      where: {},
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Category,
        attributes: ["id", "title"],
        through: { attributes: [] },
        as: "categories",
      },
    });
  },
};

export default service;
