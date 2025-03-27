import categoryService from "../Category/service";
import { Food } from "../associations";
import { Category } from "../associations";
import { CreateOneDtoType } from "./dto/create-one.dto";

const service = {
  async createOne(body: CreateOneDtoType) {
    const food = await Food.create({
      title: body.title,
      foodType: body.foodType,
      description: body.description,
      image: body.image,
      price: body.price,
    });

    const categories = await categoryService.getByIds(body.categories);
    await food.addCategories(categories);

    return food;
  },

  async getOneByTitle(title: string) {
    return await Food.findOne({ where: { title } });
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
