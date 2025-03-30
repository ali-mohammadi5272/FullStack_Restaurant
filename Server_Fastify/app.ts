import fastify from "fastify";
import cors from "@fastify/cors";
import authRouter from "./src/modules/Auth/router";
import categoriesRouter from "./src/modules/Category/router";
import usersRouter from "./src/modules/User/router";
import foodsRouter from "./src/modules/Food/router";
import contactsRouter from "./src/modules/ContactUs/router";
import employeesRouter from "./src/modules/Employee/router";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import path from "path";
import createHttpError from "http-errors";
import { env } from "./src/utils/env/env";
import { sequelize } from "./src/configs/db";
import { HttpError } from "@fastify/sensible";

const server = fastify();

server.register(cors, { origin: "*" });
server.register(fastifyStatic, {
  root: path.join(__dirname, "/public"),
  prefix: "/public",
});
server.register(fastifyMultipart, { attachFieldsToBody: true });

server.register(
  (server) => {
    server.register(authRouter, { prefix: "/auth" });
    server.register(usersRouter, { prefix: "/users" });
    server.register(categoriesRouter, { prefix: "/categories" });
    server.register(foodsRouter, { prefix: "/foods" });
    server.register(contactsRouter, { prefix: "/contact-us" });
    server.register(employeesRouter, { prefix: "/employees" });
  },
  { prefix: env.baseUrl }
);

server.setErrorHandler((error, _, reply) => {
  if (error instanceof HttpError) {
    return reply.status(error.statusCode).send(error);
  }

  reply.status(500).send(new createHttpError.InternalServerError());
});

server.listen({ port: env.port }, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  try {
    await sequelize.sync();
    console.log("✅ Connecting to Database successfully");
    console.log(`💻 Server listening at ${address}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
