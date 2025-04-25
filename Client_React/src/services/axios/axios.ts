import { RequestsObject } from "./axios.type.ts";
import { createServices } from "../../utils/helperFuncs/helperFuncs.ts";
import { axiosInstance } from "./instances/axiosInstance.ts";
import { axiosInstanceWithHeader } from "./instances/axiosInstanceWithHeader.ts";

sessionStorage.clear();

const [request, requestWithHeader]: RequestsObject[] = createServices([
  axiosInstance,
  axiosInstanceWithHeader,
]);

export { request, requestWithHeader };
