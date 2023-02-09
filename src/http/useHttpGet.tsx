import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { get } from "./HttpService";
import HttpInterface from "./httpInterface";

function useHttpGet<T>(url: string): HttpInterface<T> {
  const [state, setState] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<AxiosError>();

  useEffect(() => {
    (async () => {
      const [data, error] = await get<T>(url);
      data && setState(data);
      error && setErr(err);
      setLoading(false);
    })();
  }, []);

  return { state, loading, err, setState };
}

export default useHttpGet;
