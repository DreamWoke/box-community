/* eslint-disable @typescript-eslint/no-empty-interface */
import getUserInfoByIdMap from "./auth";

export interface RequestDefine<P, R> {
  params: P;
  response: R;
}

export interface RequestList extends getUserInfoByIdMap {}
