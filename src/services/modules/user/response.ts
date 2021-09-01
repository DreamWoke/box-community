import { CommonResponse } from "../common";
export interface loginResponse {
  token: string;
}

export interface getUserInfoResponse {
  id: number;
  nickName: string;
  avatar: string;
  gender: string;
  industry: string;
  address: string;
}
export interface UploadImgResponse {
  url: string;
}
