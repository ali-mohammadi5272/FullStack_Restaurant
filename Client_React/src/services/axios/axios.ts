import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type.ts";
import { toast } from "react-toastify";
import {
  createServices,
  getCookie,
} from "../../utils/helperFuncs/helperFuncs.ts";
import {
  ErrorResponse,
  RequestsObject,
  SuccessResponse,
} from "./axios.type.ts";

sessionStorage.clear();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

const axiosInstanceWithHeader: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Authorization: `Bearer ${getCookie(CookieEnum.ACCESS_TOKEN)}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    toast.error(err.response.data.message);
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<SuccessResponse<unknown>>) => {
    response.data.messages.forEach((message) => {
      toast.success(message);
    });
    return response;
  },
  (err: AxiosError<ErrorResponse>) => {
    if (err.code === "ERR_NETWORK") {
      toast.error(err.message);
    } else {
      err.response?.data.messages.forEach((message) => {
        toast.error(message);
      });
    }
    return Promise.reject(err);
  }
);

axiosInstanceWithHeader.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    toast.error(err.response.data.message);
    return Promise.reject(err);
  }
);

axiosInstanceWithHeader.interceptors.response.use(
  (response: AxiosResponse<SuccessResponse<unknown>>) => {
    response.data.messages.forEach((message) => {
      toast.success(message);
    });
    return response;
  },
  (err: AxiosError<ErrorResponse>) => {
    if (err.code === "ERR_NETWORK") {
      toast.error(err.message);
    } else {
      err.response?.data.messages.forEach((message) => {
        toast.error(message);
      });
    }
    return Promise.reject(err);
  }
);

const [request, requestWithHeader]: RequestsObject[] = createServices([
  axiosInstance,
  axiosInstanceWithHeader,
]);

export { axiosInstance, axiosInstanceWithHeader, request, requestWithHeader };
