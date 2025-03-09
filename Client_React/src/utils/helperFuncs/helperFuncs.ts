import { CookieEnum, CookieType } from "./helperFuncs.type.ts";
import { AxiosInstance, AxiosResponse } from "axios";
import {
  Request,
  RequestsObject,
  RequestWithBody,
} from "../../services/axios/axios.type.ts";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: CookieEnum): string | undefined => {
  return document.cookie
    ?.split("; ")
    .find(
      (item) =>
        item.startsWith(`${key}=`) && new RegExp(`^${key}=(\\S+)$`).test(item)
    )
    ?.split(`${key}=`)[1];
};

const createServices = (instances: AxiosInstance[]): RequestsObject[] =>
  instances.map(
    (instance): RequestsObject => ({
      GET: async <D>(req: Request) => {
        if (!req.cache) {
          const response = await instance.get<D, AxiosResponse<D>>(
            req.url,
            req.configs
          );
          return response;
        }

        const cachedResponse = sessionStorage.getItem(req.cache.key);

        if (!(req.cache.revalidate && req.cache.revalidate > 0)) {
          if (!cachedResponse) {
            const response = await instance.get<D, AxiosResponse<D>>(
              req.url,
              req.configs
            );
            sessionStorage.setItem(req.cache.key, JSON.stringify(response));

            return response;
          }

          return JSON.parse(cachedResponse);
        }

        if (!cachedResponse) {
          const response = await instance.get<D, AxiosResponse<D>>(
            req.url,
            req.configs
          );
          sessionStorage.setItem(req.cache.key, JSON.stringify(response));
          sessionStorage.setItem(
            `${req.cache.key}-revalidate`,
            JSON.stringify(Date.now() + req.cache.revalidate)
          );
          return response;
        }

        const cachedResponseRevalidate = sessionStorage.getItem(
          `${req.cache.key}-revalidate`
        );

        const needRevalidate = !(
          cachedResponseRevalidate &&
          JSON.parse(cachedResponseRevalidate) > Date.now()
        );
        if (!needRevalidate) {
          return JSON.parse(cachedResponse);
        }

        const response = await instance.get<D, AxiosResponse<D>>(
          req.url,
          req.configs
        );
        sessionStorage.setItem(req.cache.key, JSON.stringify(response));
        sessionStorage.setItem(
          `${req.cache.key}-revalidate`,
          JSON.stringify(Date.now() + req.cache.revalidate)
        );
        return response;
      },

      DELETE: async <D>(req: Omit<Request, "cache">) => {
        return await instance.delete<D, AxiosResponse<D>>(req.url, req.configs);
      },

      POST: async <D, B>(req: RequestWithBody<B>) => {
        return await instance.post<D, AxiosResponse<D>, B>(
          req.url,
          req.body,
          req.configs
        );
      },

      PUT: async <D, B>(req: RequestWithBody<B>) => {
        return await instance.post<D, AxiosResponse<D>, B>(
          req.url,
          req.body,
          req.configs
        );
      },
    })
  );

export { setCookie, getCookie, createServices };
