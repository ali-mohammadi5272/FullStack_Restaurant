import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";

interface SuccessResponse<T> {
  statusCode: HttpStatusCode;
  message: string;
  data: T;
}

interface ErrorResponse {
  statusCode: HttpStatusCode;
  message: string;
  error: string;
}

interface PaginationQueryStrings {
  limit: number;
  page: number;
}

interface RequestsObject {
  POST: <D, B>(
    req: RequestWithBody<B>
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;

  PUT: <D, B>(
    req: RequestWithBody<B>
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;

  DELETE: <D>(
    req: Omit<Request, "cache">
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;

  GET: <D>(
    req: Request<{ params?: Partial<PaginationQueryStrings> }>
  ) => Promise<AxiosResponse<SuccessResponse<D>>>;
}

interface CacheType {
  key: string;
  revalidate?: number;
}

interface Request<Q = unknown> {
  url: string;
  configs?: Pick<AxiosRequestConfig, "headers" | "params" | "auth"> & Q;
  cache?: CacheType;
}

interface RequestWithBody<T> extends Omit<Request, "cache"> {
  body: T;
}

export type {
  SuccessResponse,
  ErrorResponse,
  Request,
  RequestWithBody,
  RequestsObject,
};
