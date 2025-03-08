import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";

interface SuccessResponse<T> {
  statusCode: HttpStatusCode;
  messages: string[];
  data: T;
}

interface ErrorResponse {
  statusCode: HttpStatusCode;
  messages: string[];
  error: string;
}

interface RequestsObject {
  POST: <D, B>(
    req: RequestWithBody<B>,
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;

  PUT: <D, B>(
    req: RequestWithBody<B>,
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;

  DELETE: <D>(req: Request) => Promise<AxiosResponse<SuccessResponse<D>>>;

  GET: <D>(req: Request) => Promise<AxiosResponse<SuccessResponse<D>>>;
}

interface Request {
  url: string;
  configs?: Pick<AxiosRequestConfig, "headers" | "params" | "auth">;
}

interface RequestWithBody<T> extends Request {
  body: T;
}

export type { ErrorResponse, Request, RequestWithBody, RequestsObject };
