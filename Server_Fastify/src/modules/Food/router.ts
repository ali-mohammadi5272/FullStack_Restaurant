import foodController from "./controller";
import createFoodSchema from "../../utils/validators/Food/createOne";
import { FastifyInstance } from "fastify";
import { formDataValidator } from "../../utils/middlewares/formDataValidator";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { fileValidator } from "../../utils/middlewares/fileValidator";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";
import { FileTypes } from "../../enums/fileFormats.enum";
import { ImageFormats } from "./enum/imageFormats.enum";
import { GetAllEmployeesQueryStringDto } from "../Employee/dto/get-all.dto";

const router = (server: FastifyInstance) => {
  server.post(
    "/",
    {
      preHandler: [
        auth,
        roleAccess([Roles.ADMIN]),
        formDataValidator<Omit<CreateOneDtoType, "image">>(createFoodSchema, [
          "price",
          "categories",
        ]),
        fileValidator([
          {
            key: "image",
            fileType: FileTypes.IMAGE,
            formats: Object.values(ImageFormats),
          },
        ]),
      ],
    },
    foodController.createOne
  );

  server.get<{ Querystring: GetAllEmployeesQueryStringDto }>(
    "/",
    foodController.getAll
  );
};

export default router;
