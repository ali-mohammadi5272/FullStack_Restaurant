import fastify from "fastify";
import { env } from "./src/utils/env/env";

const server = fastify();

server.listen({ port: env.port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
