import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { patch } from "../services/HttpService";
import HttpInterface from "./httpInterface";

function useHttpPatch<T>(url: string, body: any): HttpInterface<T> {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<AxiosError>();

  useEffect(() => {
    (async () => {
      if (body) {
        const [data, error] = await patch<T>(url, body);
        data && setState(data);
        error && setErr(err);
        setLoading(false);
      }
    })();
  }, [body]);

  return { state, loading, err, setState };
}

export default useHttpPatch;
