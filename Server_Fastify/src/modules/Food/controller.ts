import fs from "node:fs";
import path from "node:path";
import foodService from "./service";
import categoryService from "./../Category/service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDtoType as CreateOneFoodDtoType } from "./dto/create-one.dto";
import { FoodTypes } from "./enum/foodTypes.enum";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";
import { BadRequest } from "http-errors";
import { GetAllFoodsQueryStringDto } from "./dto/get-all.dto";

const controller = {
  async createOne(req: FastifyRequest, res: FastifyReply) {
    const formData: FormData = await req.formData();

    const title = formData.get("title") as string;
    const isFoodExistsBefore = await foodService.getOneByTitle(title);
    if (isFoodExistsBefore) {
      throw new BadRequest("Food already exists");
    }

    const file = formData.get("image") as File | null;
    let fileName: string = "defaultPhoto.png";
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer: Buffer = Buffer.from(arrayBuffer);

      fileName = `${Date.now()}-${Math.random() * 789}-${file.name}`;

      const pathAddress = path.join(
        process.cwd(),
        "public/images/foods/",
        `${fileName}`
      );

      fs.writeFileSync(pathAddress, buffer);
    }

    const body: CreateOneFoodDtoType = {
      title: formData.get("title") as string,
      price: JSON.parse(formData.get("price") as string) as number,
      foodType: formData.get("foodType") as FoodTypes,
      description: formData.get("description") as string,
      categories: JSON.parse(formData.get("categories") as string),
      image: fileName,
    };

    const food = await foodService.createOne(body);

    return createSuccessResponse(res, {
      statusCode: 201,
      data: food,
      message: "Food created successfully",
    });
  },

  async getAll(
    req: FastifyRequest<{
      Querystring: GetAllFoodsQueryStringDto;
    }>,
    res: FastifyReply
  ) {
    const count: number = await foodService.getAllCount();

    let foods = await foodService.getAll(req.query);
    if (req.query.categoryId) {
      const category = await categoryService.getOneById(req.query.categoryId);
      if (category) {
        foods = await category.getFoods();
      }
    }

    const changedFoods = foods.map((food) => {
      const pathAddress = `/public/images/foods/${food.image}`;
      food.image = pathAddress.replace(/\\/g, "/");
      return food;
    });

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: {
        foods: changedFoods,
        count,
      },
    });
  },
};

export default controller;
