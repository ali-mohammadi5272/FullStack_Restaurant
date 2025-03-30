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
import { BadRequest } from "http-errors";

const controller = {
  async getAll(
    req: FastifyRequest<{
      Querystring: GetAllEmployeesQueryStringDto;
    }>,
    res: FastifyReply
  ) {
    const employees = await employeeService.getAll(req.query);

    const changedEmployees = employees.map((employee) => {
      const pathAddress = `/public/images/employees/${employee.image}`;
      employee.image = pathAddress.replace(/\\/g, "/");
      return employee;
    });

    return createSuccessResponse(res, {
      statusCode: 200,
      message: null,
      data: changedEmployees,
    });
  },

  async createOne(req: FastifyRequest, res: FastifyReply) {
    const formData: FormData = await req.formData();
    const file = formData.get("image") as File;

    const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
    const buffer: Buffer = Buffer.from(arrayBuffer);

    const fileName = `${Date.now()}-${Math.random() * 789}-${file.name}`;
    const pathAddress = path.join(
      process.cwd(),
      "public/images/employees/",
      `${fileName}`
    );

    fs.writeFileSync(pathAddress, buffer);

    const body: CreateOneEmployeeDto = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      gender: formData.get("gender") as Genders,
      role: formData.get("role") as EmployeeRoles,
      image: fileName,
    };

    const isEmployeeExistsBefore =
      await employeeService.getOneByFirstNameAndLastName({
        firstName: body.firstName,
        lastName: body.lastName,
      });
    if (isEmployeeExistsBefore) {
      throw new BadRequest("Employee already exists");
    }

    await employeeService.createOne(body);

    return createSuccessResponse(res, {
      statusCode: 201,
      message: "Employee created successfully",
      data: null,
    });
  },

  async removeOne(
    req: FastifyRequest<{ Params: RemoveOneEmployeeParamsDto }>,
    res: FastifyReply
  ) {
    try {
      await employeeService.removeOne(req.params.employeeId);

      return res.status(200).send({
        statusCode: 200,
        data: null,
        messages: ["Employee removed successfully"],
      });
    } catch (err) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  },
};

export default controller;
