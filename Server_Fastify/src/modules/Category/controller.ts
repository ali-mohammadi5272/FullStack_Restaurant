import categoryService from "./service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { UpdateOneDto, UpdateOneParamsDto } from "./dto/update-one.dto";
import { BadRequest } from "http-errors";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";

const controller = {
  async createOne(
    req: FastifyRequest<{ Body: CreateOneDtoType }>,
    res: FastifyReply
  ) {
    const isUserExistBefore = !!(await categoryService.getOneByTitle(
      req.body.title
    ));
    if (isUserExistBefore) {
      throw new BadRequest("Category already exists");
    }

    const category = await categoryService.createOne(req.body);
    return createSuccessResponse(res, {
      statusCode: 201,
      message: "Category created successfully",
      data: { category },
    });
  },

  async getAll(_: FastifyRequest, res: FastifyReply) {
    const categories = await categoryService.getAll();

    return res.status(200).send({
      statusCode: 200,
      messages: [],
      data: categories,
    });
  },

  async updateOne(
    req: FastifyRequest<{ Body: UpdateOneDto; Params: UpdateOneParamsDto }>,
    res: FastifyReply
  ) {
    try {
      const category = await categoryService.getOneById(req.params.categoryId);
      if (!category) {
        return res.status(404).send({
          statusCode: 404,
          error: "Not Found",
          messages: ["Category not Found"],
        });
      }

      const categoryWithTitle = await categoryService.getOneByTitle(
        req.body.title
      );
      if (categoryWithTitle) {
        if (category.id !== categoryWithTitle.id) {
          return res.status(400).send({
            statusCode: 400,
            error: "Category Update",
            messages: [
              `Category with this title:'${req.body.title}' is exists`,
            ],
          });
        }
      }

      await categoryService.updateOne(req.body, req.params.categoryId);
      return res.status(200).send({
        statusCode: 200,
        data: null,
        messages: ["Category updated successfully"],
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
