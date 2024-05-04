import { AxiosError } from "axios";
import React from "react";

export default interface HttpInterface<T> {
  state: T;
  loading: boolean;
  err: AxiosError;
  setState?: React.Dispatch<React.SetStateAction<T>>;
}

enum HttpMethod {
  POST,
  PUT,
  PATCH,
  GET
}

export { HttpMethod };
