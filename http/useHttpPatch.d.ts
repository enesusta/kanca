import HttpInterface from "./httpInterface";
declare function useHttpPatch<T>(url: string, body: any): HttpInterface<T>;
export default useHttpPatch;
