import foodController from "./controller";
import createFoodSchema from "../../utils/validators/Food/createOne";
import { FastifyInstance } from "fastify";
import { formDataValidator } from "../../utils/middlewares/formDataValidator";
import { CreateOneDtoType } from "./dto/create-one.dto";
import { ImageFormats } from "./enum/imageFormats.enum";
import { fileValidator } from "../../utils/middlewares/fileValidator";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";

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
          ImageFormats.jpeg,
          ImageFormats.jpg,
          ImageFormats.png,
          ImageFormats.svg,
          ImageFormats.webp,
        ]),
      ],
    },
    foodController.createOne
  );

  server.get("/", foodController.getAll);
};

export default router;
