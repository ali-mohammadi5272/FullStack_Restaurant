import { Dialect } from "sequelize";

interface EnvType {
  db: {
    username: string;
    password: string;
    name: string;
    host: string;
    port: number;
    dialect: Dialect;
  };

  port: number;
}

export type { EnvType };
