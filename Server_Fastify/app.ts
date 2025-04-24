import fastify from "fastify";
import cors from "@fastify/cors";
import authRouter from "./src/modules/Auth/router";
import categoriesRouter from "./src/modules/Category/router";
import usersRouter from "./src/modules/User/router";
import foodsRouter from "./src/modules/Food/router";
import contactsRouter from "./src/modules/ContactUs/router";
import employeesRouter from "./src/modules/Employee/router";
import refreshTokensRouter from "./src/modules/RefreshToken/router";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import path from "path";
import { env } from "./src/utils/env/env";
import { sequelize } from "./src/configs/db";

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
    server.register(refreshTokensRouter, { prefix: "/refreshTokens" });
  },
  { prefix: env.baseUrl }
);

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
