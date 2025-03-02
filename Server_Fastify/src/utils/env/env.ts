import { Dialect } from "sequelize";
import { EnvType } from "./env.type";

const env: EnvType = {
  db: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    name: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
    dialect: process.env.DB_DIALECT as Dialect,
  },

  port: process.env.PORT ? +process.env.PORT : 3000,
};

export { env };
