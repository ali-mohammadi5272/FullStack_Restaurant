import controller from "./controller";
import createEmployeeSchema from "../../utils/validators/Employee/createOne";
import { FastifyInstance } from "fastify";
import { formDataValidator } from "../../utils/middlewares/formDataValidator";
import { fileValidator } from "../../utils/middlewares/fileValidator";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";
import { ImageFormats } from "../Food/enum/imageFormats.enum";
import { CreateOneEmployeeDto } from "./dto/create-one";

const router = (server: FastifyInstance) => {
  server.post(
    "/",
    {
      preHandler: [
        auth,
        roleAccess([Roles.ADMIN]),
        formDataValidator<Omit<CreateOneEmployeeDto, "image">>(
          createEmployeeSchema,
          []
        ),
        fileValidator([
          ImageFormats.jpeg,
          ImageFormats.jpg,
          ImageFormats.png,
          ImageFormats.svg,
          ImageFormats.webp,
        ]),
      ],
    },
    controller.createOne
  );
};

export default router;
