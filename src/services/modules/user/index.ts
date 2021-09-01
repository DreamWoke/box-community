import { RequestDefine } from "..";
import { loginParam, ReviseUserInfoParam, UploadImgParam } from "./params";
import { loginResponse, getUserInfoResponse, UploadImgResponse } from "./response";

export default interface PCRequestMap {
  login: RequestDefine<loginParam, loginResponse>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserInfo: RequestDefine<any, getUserInfoResponse>;
  upload: RequestDefine<UploadImgParam, UploadImgResponse>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reviseUserInfo: RequestDefine<ReviseUserInfoParam, any>;
}
