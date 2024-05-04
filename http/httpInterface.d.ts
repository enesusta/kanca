import { AxiosError } from "axios";
import React from "react";
export default interface HttpInterface<T> {
    state: T;
    loading: boolean;
    err: AxiosError;
    setState?: React.Dispatch<React.SetStateAction<T>>;
}
declare enum HttpMethod {
    POST = 0,
    PUT = 1,
    PATCH = 2,
    GET = 3
}
export { HttpMethod };
