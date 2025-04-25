import { getCookie, setCookie } from "../../../utils/helperFuncs/helperFuncs";
import { CookieEnum } from "../../../utils/helperFuncs/helperFuncs.type";
import { requestWithHeader } from "../axios";
import { toast } from "react-toastify";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstanceWithHeader: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    Authorization: `Bearer ${getCookie(CookieEnum.ACCESS_TOKEN)}`,
  },
});

const requestSuccessInterceptor = () => {
  return (config: InternalAxiosRequestConfig) => {
    return config;
  };
};

const requestErrInterceptor = () => {
  return (err: unknown) => {
    if (err instanceof AxiosError) {
      toast.error(err?.response?.data.message);
    }
    return Promise.reject(err);
  };
};

const responseSuccessInterceptor = () => {
  return (response: AxiosResponse) => {
    toast.success(response.data.message);
    return response;
  };
};

const responseErrInterceptor = () => {
  let isFirstRetry: boolean = true;

  return async (err: unknown) => {
    if (err instanceof AxiosError) {
      const originalRequest = err.config;

      if (
        err.response &&
        err.response.status === 401 &&
        isFirstRetry &&
        originalRequest
      ) {
        isFirstRetry = false;

        try {
          const refreshTokenCookie = getCookie(CookieEnum.REFRESH_TOKEN);
          if (!refreshTokenCookie) {
            throw new Error("Unauthorized");
          }

          const response = await requestWithHeader.GET<string>({
            url: "/refreshTokens/getNewAccessToken",
            configs: {
              headers: {
                Authorization: `Bearer ${refreshTokenCookie}`,
              },
            },
          });

          const accessToken = response.data.data;

          setCookie({
            key: CookieEnum.ACCESS_TOKEN,
            value: accessToken,
            maxAge: 60 * 60 * 24,
            path: "/",
          });

          axiosInstanceWithHeader.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          return axiosInstanceWithHeader(originalRequest);
        } catch (error) {
          toast.error(err.response.data.message);
          return Promise.reject(error);
        }
      }
    }

    toast.error("An unexpected Error occurred.");

    return Promise.reject(err);
  };
};

axiosInstanceWithHeader.interceptors.request.use(
  requestSuccessInterceptor(),
  requestErrInterceptor()
);

axiosInstanceWithHeader.interceptors.response.use(
  responseSuccessInterceptor(),
  responseErrInterceptor()
);

export { axiosInstanceWithHeader };
