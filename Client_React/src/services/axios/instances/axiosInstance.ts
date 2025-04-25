import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
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

export { axiosInstance };
