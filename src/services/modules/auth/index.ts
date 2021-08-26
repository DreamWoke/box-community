import { RequestDefine } from "..";
import { loginParam } from "./params";
import { loginResponse, getUserInfoResponse } from "./response";

export default interface PCRequestMap {
  login: RequestDefine<loginParam, loginResponse>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserInfo: RequestDefine<any, getUserInfoResponse>;
}
