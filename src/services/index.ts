import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { message } from "antd";
import { RequestList } from "./modules";

export const BaseUrlMap = {
  UserApi: "/api/user",
  authApi: "/api/auth",
};

interface ServiceParams<T extends keyof RequestList> extends AxiosRequestConfig {
  url: T;
  data: RequestList[T]["params"];
}

type RequestFunc = <T extends keyof RequestList>(params: ServiceParams<T>) => AxiosPromise<RequestList[T]["response"]>;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const Domain = "/api/user";
const AxiosInstance = axios.create({
  method: "GET",
  timeout: 10000,
  withCredentials: true,
  // baseURL: BaseUrlMap.UserApi,
});

const processError = async (error: any) => {
  // 这边处理http的错误状态 而不处理返回中的如  respCode 的错误信息
  if (error?.response) {
    const status = error.response.status;
    switch (status) {
      case 400:
        error.message = "请求错误";
        break;
      case 401:
        message.error("登录状态已失效");
        error.message = "未授权，请登录";
        break;
      case 403:
        error.message = "拒绝访问";
        break;
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`;
        break;
      case 408:
        error.message = "请求超时";
        break;
      case 500:
        error.message = "服务器内部错误";
        break;
      case 501:
        error.message = "服务未实现";
        break;
      case 502:
        error.message = "网关错误";
        break;
      case 503:
        error.message = "服务不可用";
        break;
      case 504:
        error.message = "网关超时";
        break;
      case 505:
        error.message = "HTTP版本不受支持";
        break;
      default:
        break;
    }
  }
  return Promise.reject(error);
};

AxiosInstance.interceptors.request.use((config) => {
  console.log(config);
  config.url = `${Domain}/${config.url}`;
  config.headers["Authorization"] = "22334";
  return config;
});

AxiosInstance.interceptors.response.use((response) => {
  // 当返回类型是arraybuffer时，直接返回
  if (response.config.responseType === "arraybuffer") {
    return response;
  }
  const res = response.data;
  if (res.code === 0 || res.status === "0") {
    // status =>直接调用ufin接口
    return {
      ...response,
      ...res,
    };
  } else {
    message.error(res.message || res.errorMsg || "Error");
    return Promise.reject(res);
  }
}, processError);

const Service: RequestFunc = AxiosInstance.request;

export default Service;
