import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";

interface SuccessResponse<T> {
  statusCode: HttpStatusCode;
  messages: string[] | null;
  data: T;
}

interface RequestsObject {
  POST: <D, B>(req: RequestWithBody<B>) => Promise<AxiosResponse<D>>;
  PUT: <D, B>(req: RequestWithBody<B>) => Promise<AxiosResponse<D>>;
  DELETE: <D>(req: Request) => Promise<AxiosResponse<D>>;
  GET: <D>(req: Request) => Promise<AxiosResponse<D>>;
}

interface Request {
  url: string;
  configs?: Pick<AxiosRequestConfig, "headers" | "params" | "auth">;
}

interface RequestWithBody<T> extends Request {
  body: T;
}

export type { Request, RequestWithBody, RequestsObject };
