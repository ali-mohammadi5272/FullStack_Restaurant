import createCategorySchema from "../../utils/validators/Categories/CreateOne";
import categoryController from "./controller";
import updateCategorySchema from "../../utils/validators/Categories/updateOne";
import { FastifyInstance } from "fastify";
import { bodyValidator } from "../../utils/middlewares/bodyValidator";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { UpdateOneDto, UpdateOneParamsDto } from "./dto/update-one.dto";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";

const router = (server: FastifyInstance) => {
  server.get("/", categoryController.getAll);

  server.post<{ Body: CreateOneDtoType }>(
    "/",
    {
      preHandler: [auth, bodyValidator<CreateOneDtoType>(createCategorySchema)],
    },
    categoryController.createOne
  );

  server.put<{ Body: UpdateOneDto; Params: UpdateOneParamsDto }>(
    "/",
    {
      preHandler: [
        auth,
        roleAccess([Roles.ADMIN]),
        bodyValidator<UpdateOneDto>(updateCategorySchema),
      ],
    },
    categoryController.updateOne
  );
};

export default router;
