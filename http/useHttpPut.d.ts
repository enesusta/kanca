import HttpInterface from "./httpInterface";
declare function useHttpPut<T>(url: string, body: any): HttpInterface<T>;
export default useHttpPut;
