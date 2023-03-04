import debounce from "lodash.debounce";
import { useCallback, useEffect, useMemo } from "react";

export enum DEBOUNCE_TYPE {
  USE_CALLBACK,
  USE_MEMO,
}

function useDebouncedCallback<T>(
  changeHandler: (event: T) => void,
  throttle: number,
  dependencies?: [],
  debounceType: DEBOUNCE_TYPE = DEBOUNCE_TYPE.USE_CALLBACK
) {
  const debounceChangeHandler =
    debounceType === DEBOUNCE_TYPE.USE_CALLBACK
      ? useCallback(debounce(changeHandler, throttle), dependencies ?? [])
      : useMemo(() => debounce(changeHandler, throttle), dependencies ?? []);

  useEffect(() => {
    return () => {
      debounceType === DEBOUNCE_TYPE.USE_MEMO && debounceChangeHandler.cancel();
    };
  }, []);

  return debounceChangeHandler;
}

export default useDebouncedCallback;
