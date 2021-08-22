import { RequestDefine } from "..";
import { loginResponse } from "./response";

export default interface PCRequestMap {
  login: RequestDefine<any, loginResponse>;
}
