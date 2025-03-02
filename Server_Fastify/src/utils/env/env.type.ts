import { Dialect } from "sequelize";

export type NumericType = `${number}s` | `${number}m` | `${number}h` | `${number}d`;

export interface EnvType {
  db: {
    username: string;
    password: string;
    name: string;
    host: string;
    port: number;
    dialect: Dialect;
  };

  token: {
    accessToken: {
      key: string;
      expireIn: NumericType;
    };
    refreshToken: {
      key: string;
      expireIn: NumericType;
    };
  };

  version: string;

  port: number;
}
