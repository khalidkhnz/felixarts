interface Interceptor<T> {
  use(handler: (input: T) => T): void;
  handler: (input: T) => T;
}

interface RequestInterceptor {
  input: RequestInfo;
  init?: RequestInit;
}

interface ResponseInterceptor {
  ok: boolean;
  status: number;
  statusText: string;
  headers: Headers;
  text: () => Promise<string>;
  json: () => Promise<any>;
}

export interface FetchInterceptor {
  request: Interceptor<RequestInterceptor>;
  response: Interceptor<ResponseInterceptor>;
}
