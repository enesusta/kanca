import { useState, useEffect } from "react";

function useDelayedState<T>(value: T, delay: number = 250) {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return state;
}

export default useDelayedState;