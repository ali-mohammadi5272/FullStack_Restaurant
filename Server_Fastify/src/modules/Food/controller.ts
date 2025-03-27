import fs from "node:fs";
import path from "node:path";
import foodService from "./service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDtoType as CreateOneFoodDtoType } from "./dto/create-one.dto";
import { FoodTypes } from "./enum/foodTypes.enum";

const controller = {
  async createOne(req: FastifyRequest, res: FastifyReply) {
    try {
      const formData: FormData = await req.formData();

      const title = formData.get("title") as string;
      const isFoodExistsBefore = await foodService.getOneByTitle(title);
      if (isFoodExistsBefore) {
        return res.status(400).send({
          statusCode: 400,
          error: "Duplicated Food",
          messages: ["Food already exists"],
        });
      }

      const file = formData.get("file") as File;

      const arrayBuffer = await file.arrayBuffer();
      const buffer: Buffer = Buffer.from(arrayBuffer);

      const fileName = `${Date.now()}-${Math.random() * 789}-${file.name}`;
      const pathAddress = path.join(
        process.cwd(),
        "public/images/foods/",
        `${fileName}`
      );

      fs.writeFileSync(pathAddress, buffer);

      const body: CreateOneFoodDtoType = {
        title: formData.get("title") as string,
        price: JSON.parse(formData.get("price") as string) as number,
        foodType: formData.get("foodType") as FoodTypes,
        description: formData.get("description") as string,
        categories: JSON.parse(formData.get("categories") as string),
        image: fileName,
      };

      await foodService.createOne(body);

      return res.status(201).send({
        statusCode: 201,
        data: null,
        messages: ["Food created successfully"],
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  },

  async getAll(_: FastifyRequest, res: FastifyReply) {
    try {
      const foods = await foodService.getAll();

      const changedFoods = foods.map((food) => {
        const pathAddress = `/public/images/foods/${food.image}`;
        food.image = pathAddress.replace(/\\/g, "/");
        return food;
      });

      return res.status(200).send({
        statusCode: 200,
        messages: [],
        data: changedFoods,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  },
};

export default controller;
