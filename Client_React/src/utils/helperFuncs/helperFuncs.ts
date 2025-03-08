import { CookieType } from "./helperFuncs.type.ts";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: string): string | undefined => {
  return document.cookie
    ?.split("; ")
    .find((item) => item.includes(`${key}`))
    ?.split(`${key}=`)[1];
};

export { setCookie, getCookie };
