import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils/helperFuncs/helperFuncs.ts";
import { CookieEnum } from "../utils/helperFuncs/helperFuncs.type.ts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const axiosInstanceWithHeader: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${getCookie(CookieEnum.ACCESS_TOKEN)}`,
  },
});

export { axiosInstance, axiosInstanceWithHeader };
