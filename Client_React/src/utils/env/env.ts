import { EnvType } from "./env.type";

const env: EnvType = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  baseUrlApi: import.meta.env.VITE_BASE_URL_API,
};

export { env };
