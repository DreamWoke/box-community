export interface loginParam {
  name: string;
  password: string;
}

export type UploadImgParam = FormData;

export interface ReviseUserInfoParam {
  nickName?: string;
  avatar?: string;
  gender?: string;
  industry?: string;
  address?: string;
}
