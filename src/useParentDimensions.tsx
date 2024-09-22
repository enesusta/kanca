import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

const useParentDimensions = (throttle: number = 300, dependencies?: []) => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const ref = useRef<HTMLDivElement | any>(null);

  const changeHandler = (event: any) => {
    setWidth(event[0].contentBoxSize[0].inlineSize);
    setHeight(event[0].contentBoxSize[0].blockSize);
  };

  const debounceChangeHandler = useCallback(debounce(changeHandler, throttle), dependencies ?? [])

  useEffect(() => {
    let resizeObserver: ResizeObserver;

    if (ref.current) {
      resizeObserver = new ResizeObserver(event => {
        debounceChangeHandler(event);
      });

      resizeObserver.observe(ref.current);
    }

    return () => {
      ref?.current && resizeObserver.unobserve(ref.current);
    };
  }, [ref]);

  return {
    viewport: ref,
    width,
    height
  };
}

export default useParentDimensions
