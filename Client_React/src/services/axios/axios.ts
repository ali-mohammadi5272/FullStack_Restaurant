import axios, { AxiosInstance } from "axios";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type.ts";
import { RequestsObject } from "./axios.type.ts";
import {
  createServices,
  getCookie,
} from "../../utils/helperFuncs/helperFuncs.ts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const axiosInstanceWithHeader: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${getCookie(CookieEnum.ACCESS_TOKEN)}`,
  },
});

const [request, requestWithHeader]: RequestsObject[] = createServices([
  axiosInstance,
  axiosInstanceWithHeader,
]);

export { axiosInstance, axiosInstanceWithHeader, request, requestWithHeader };
