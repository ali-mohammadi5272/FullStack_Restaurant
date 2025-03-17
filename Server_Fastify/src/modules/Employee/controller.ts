import fs from "node:fs";
import path from "node:path";
import employeeService from "./service";
import { Genders } from "../User/enum/genders.enum";
import { CreateOneEmployeeDto } from "./dto/create-one";
import { EmployeeRoles } from "./enum/employeeRoles.enum";
import { FastifyReply, FastifyRequest } from "fastify";

const controller = {
  async getAll(_: FastifyRequest, res: FastifyReply) {
    try {
      const employees = await employeeService.getAll();

      return res.status(200).send({
        statusCode: 200,
        messages: [],
        data: employees,
      });
    } catch (err) {
      return res.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        messages: ["Internal Server Error"],
      });
    }
  },

  async createOne(req: FastifyRequest, res: FastifyReply) {
    try {
      const formData: FormData = await req.formData();
      const file = formData.get("image") as File;

      const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
      const buffer: Buffer = Buffer.from(arrayBuffer);

      const fileName = `${Date.now()}-${Math.random() * 789}-${file.name}`;
      const pathAddress = path.join(
        process.cwd(),
        "src/public/images/employees/",
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
        !!(await employeeService.getOneByFirstNameAndLastName({
          firstName: body.firstName,
          lastName: body.lastName,
        }));

      if (isEmployeeExistsBefore) {
        return res.status(400).send({
          statusCode: 400,
          error: "Duplicated Employee",
          messages: ["Employee Exists before"],
        });
      }

      await employeeService.createOne(body);

      return res.status(201).send({
        statusCode: 201,
        data: [],
        messages: ["Employee created successfully"],
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
