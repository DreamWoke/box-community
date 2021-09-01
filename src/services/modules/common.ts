export interface TableParams {
  limit: number;
  offset: number;
}

export interface CommonResponse<T = any> {
  code?: number;
  message?: string;
  data: T;
}
