import controller from "./controller";
import createEmployeeSchema from "../../utils/validators/Employee/createOne";
import getAllEmployeesQueryStringSchema from "../../utils/validators/Employee/getAllQueryString";
import { FastifyInstance } from "fastify";
import { formDataValidator } from "../../utils/middlewares/formDataValidator";
import { fileValidator } from "../../utils/middlewares/fileValidator";
import { auth } from "../../utils/middlewares/auth";
import { roleAccess } from "../../utils/middlewares/roleAccess";
import { Roles } from "../User/enum/roles.enum";
import { ImageFormats } from "../Food/enum/imageFormats.enum";
import { CreateOneEmployeeDto } from "./dto/create-one.dto";
import { RemoveOneEmployeeParamsDto } from "./dto/remove-one.dto";
import { queryStringValidator } from "../../utils/middlewares/queryStringValidator";
import { GetAllEmployeesQueryStringDto } from "./dto/get-all.dto";

const router = (server: FastifyInstance) => {
  server.get<{ Querystring: GetAllEmployeesQueryStringDto }>(
    "/",
    {
      preHandler: [
        queryStringValidator<GetAllEmployeesQueryStringDto>(
          getAllEmployeesQueryStringSchema
        ),
      ],
    },
    controller.getAll
  );

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

  server.delete<{ Params: RemoveOneEmployeeParamsDto }>(
    "/:employeeId",
    {
      preHandler: [auth, roleAccess([Roles.ADMIN])],
    },
    controller.removeOne
  );
};

export default router;
