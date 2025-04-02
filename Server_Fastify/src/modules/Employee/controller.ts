import fs from "node:fs";
import path from "node:path";
import employeeService from "./service";
import { Genders } from "../User/enum/genders.enum";
import { CreateOneEmployeeDto } from "./dto/create-one.dto";
import { EmployeeRoles } from "./enum/employeeRoles.enum";
import { FastifyReply, FastifyRequest } from "fastify";
import { RemoveOneEmployeeParamsDto } from "./dto/remove-one.dto";
import { GetAllEmployeesQueryStringDto } from "./dto/get-all.dto";
import { createSuccessResponse } from "../../utils/helperFuncs/helperFuncs";
import { BadRequest, NotFound } from "http-errors";

const controller = {
  async getAll(
    req: FastifyRequest<{
      Querystring: GetAllEmployeesQueryStringDto;
    }>,
    res: FastifyReply
  ) {
    const employees = await employeeService.getAll(req.query);
    const changedEmployees = employees.rows.map((employee) => {
      const pathAddress = `/public/images/employees/${employee.image}`;
      employee.image = pathAddress.replace(/\\/g, "/");
      return employee;
    });

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: {
        rows: changedEmployees,
        count: employees.count,
      },
    });
  },

  async createOne(req: FastifyRequest, res: FastifyReply) {
    const formData: FormData = await req.formData();

    const isEmployeeExistsBefore =
      await employeeService.getOneByFirstNameAndLastName({
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
      });
    if (isEmployeeExistsBefore) {
      throw new BadRequest("Employee already exists");
    }

    const file = formData.get("image") as File | null;
    let fileName: string = "defaultPhoto.jpg";
    if (file) {
      const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
      const buffer: Buffer = Buffer.from(arrayBuffer);

      fileName = `${Date.now()}-${Math.random() * 789}-${file.name}`;
      const pathAddress = path.join(
        process.cwd(),
        "public/images/employees/",
        `${fileName}`
      );

      fs.writeFileSync(pathAddress, buffer);
    }

    const body: CreateOneEmployeeDto = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      gender: formData.get("gender") as Genders,
      role: formData.get("role") as EmployeeRoles,
      image: fileName,
    };

    const employee = await employeeService.createOne(body);

    return createSuccessResponse(res, {
      statusCode: 201,
      message: "Employee created successfully",
      data: employee,
    });
  },

  async removeOne(
    req: FastifyRequest<{ Params: RemoveOneEmployeeParamsDto }>,
    res: FastifyReply
  ) {
    const employee = await employeeService.getOneById(req.params.employeeId);
    if (!employee) {
      throw new NotFound("Employee not found");
    }

    await employeeService.removeOne(employee.id);

    return createSuccessResponse(res, {
      statusCode: 200,
      message: "Employee removed successfully",
      data: null,
    });
  },
};

export default controller;
