import categoryService from "../Category/service";
import { Food } from "../associations";
import { Category } from "../associations";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { GetAllFoodsQueryStringDto } from "./dto/get-all.dto";

const service = {
  async getAllCount() {
    return await Food.count();
  },

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

  async getAll(configs: GetAllFoodsQueryStringDto) {
    const foods: Food[] = [];
    let category: Category | null = null;

    if (configs.categoryId) {
      category = await categoryService.getOneById(configs.categoryId);
      if (category) {
        const categoryFoods = await category.getFoods();
        foods.push(...categoryFoods);
      }
    }
    const ids = foods.map((food) => food.id);

    return await Food.findAndCountAll({
      where: category ? { id: ids } : {},
      limit: +configs.limit,
      offset: (+configs.page - 1) * +configs.limit,
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
