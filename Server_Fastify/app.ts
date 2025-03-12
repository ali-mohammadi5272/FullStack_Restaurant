import fastify from "fastify";
import cors from "@fastify/cors";
import authRouter from "./src/modules/Auth/router";
import categoriesRouter from "./src/modules/Category/router";
import usersRouter from "./src/modules/User/router";
import foodsRouter from "./src/modules/Food/router";
import ContactRouter from "./src/modules/ContactUs/router";
import fastifyMultipart from "@fastify/multipart";
import { env } from "./src/utils/env/env";
import { sequelize } from "./src/configs/db";

const server = fastify();

server.register(cors, { origin: "*" });
server.register(fastifyMultipart, { attachFieldsToBody: true });

server.register(
  (server) => {
    server.register(authRouter, { prefix: "/auth" });
    server.register(usersRouter, { prefix: "/users" });
    server.register(categoriesRouter, { prefix: "/categories" });
    server.register(foodsRouter, { prefix: "/foods" });
    server.register(ContactRouter, { prefix: "/contact-us" });
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
