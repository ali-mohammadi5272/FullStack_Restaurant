import axios, { AxiosInstance } from "axios";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type.ts";
import { toast } from "react-toastify";
import { RequestsObject } from "./axios.type.ts";
import {
  createServices,
  getCookie,
} from "../../utils/helperFuncs/helperFuncs.ts";

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
  (response) => {
    toast.success(response.data.message);
    return response;
  },
  (err) => {
    toast.error(err.response.data.message);
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
  (response) => {
    toast.success(response.data.message);
    return response;
  },
  (err) => {
    toast.error(err.response.data.message);
    return Promise.reject(err);
  }
);

const [request, requestWithHeader]: RequestsObject[] = createServices([
  axiosInstance,
  axiosInstanceWithHeader,
]);

export { axiosInstance, axiosInstanceWithHeader, request, requestWithHeader };
