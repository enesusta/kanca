import HttpInterface from "./httpInterface";
declare function useHttpPost<T>(url: string, body: any): HttpInterface<T>;
export default useHttpPost;
