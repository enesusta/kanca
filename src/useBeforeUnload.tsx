import { useEffect } from "react";

function useBeforeUnload<T>(callback?: () => T) {
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", callback && callback);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", callback && callback);
    };
  }, []);

  const alertUser = (event: any) => {
    event.preventDefault();
    event.returnValue = "";
  };
}

export default useBeforeUnload;
