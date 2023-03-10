import HttpInterface from "./httpInterface";
declare function useHttpGet<T>(url: string): HttpInterface<T>;
export default useHttpGet;
