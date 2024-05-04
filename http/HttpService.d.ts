import { AxiosError } from 'axios';
declare function get<Type>(url: string, throttle?: number): Promise<[Type, AxiosError]>;
declare function post<Type>(url: string, body?: any): Promise<[Type, AxiosError]>;
declare function put<Type>(url: string, body?: any): Promise<[Type, AxiosError]>;
declare function head<Type>(url: string): Promise<[Type, AxiosError]>;
declare function patch<Type>(url: string, body?: any): Promise<[Type, AxiosError]>;
declare function del<Type>(url: string, body?: any): Promise<[Type, AxiosError]>;
export { get, post, put, patch, head, del };
