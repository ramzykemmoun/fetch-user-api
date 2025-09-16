interface HTTPResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

interface QueryParams {
  limit?: number;
  skip?: number;
  q?: string;
}
