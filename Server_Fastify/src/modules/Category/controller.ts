import categoryService from "./service";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { UpdateOneDto, UpdateOneParamsDto } from "./dto/update-one.dto";
import { BadRequest, NotFound } from "http-errors";
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

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: categories,
    });
  },

  async updateOne(
    req: FastifyRequest<{ Body: UpdateOneDto; Params: UpdateOneParamsDto }>,
    res: FastifyReply
  ) {
    const category = await categoryService.getOneById(req.params.categoryId);
    if (!category) {
      throw new NotFound("Category not Found");
    }

    const foundedCategory = await categoryService.getOneByTitle(req.body.title);
    if (foundedCategory) {
      if (category.id !== foundedCategory.id) {
        throw new BadRequest(
          `Category with this title:'${req.body.title}' is exists`
        );
      }
    }

    await categoryService.updateOne(req.body, req.params.categoryId);
    return res.status(200).send({
      statusCode: 200,
      data: null,
      messages: ["Category updated successfully"],
    });
  },
};

export default controller;
