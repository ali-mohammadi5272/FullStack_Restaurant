export enum CookieEnum {
  REFRESH_TOKEN = "REFRESH_TOKEN",
  ACCESS_TOKEN = "ACCESS_TOKEN",
}
  key: string | number;
  value: string | number;
  maxAge: number;
  path: string;
}

export type { CookieType };
