import fastify from "fastify";
import cors from "@fastify/cors";
import { env } from "./src/utils/env/env";
import { sequelize } from "./src/configs/db";

const server = fastify();

server.register(cors, { origin: "*" });

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
