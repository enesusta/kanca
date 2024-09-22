import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";

export default function useWindowDimensions(throttle: number = 300, dependencies?: []) {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const debounceChangeHandler = useCallback(debounce(handleResize, throttle), dependencies ?? [])

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", debounceChangeHandler);
      return () => window.removeEventListener("resize", debounceChangeHandler);
    }
  }, [hasWindow]);

  return windowDimensions;
}
