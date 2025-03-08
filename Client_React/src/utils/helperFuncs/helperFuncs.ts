import { CookieEnum, CookieType } from "./helperFuncs.type.ts";
import { AxiosInstance, AxiosResponse } from "axios";
import { Request, RequestWithBody } from "../../services/axios/axios.type.ts";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: CookieEnum): string | undefined => {
  return document.cookie
    ?.split("; ")
    .find((item) => item.includes(`${key}`))
    ?.split(`${key}=`)[1];
};

const createServices = (instances: AxiosInstance[]) =>
  instances.map((instance) => ({
    GET: async <D>(req: Request) => {
      return await instance.get<D, AxiosResponse<D>>(req.url, req.configs);
    },

    DELETE: async <D>(req: Request) => {
      return await instance.delete<D, AxiosResponse<D>>(req.url, req.configs);
    },

    POST: async <D, B>(req: RequestWithBody<B>) => {
      return await instance.post<D, AxiosResponse<D>, B>(
        req.url,
        req.body,
        req.configs,
      );
    },

    PUT: async <D, B>(req: RequestWithBody<B>) => {
      return await instance.post<D, AxiosResponse<D>, B>(
        req.url,
        req.body,
        req.configs,
      );
    },
  }));

export { setCookie, getCookie, createServices };
