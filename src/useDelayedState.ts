import { useState, useEffect } from "react";

function useDelayedState(value: any, delay: number = 250) {
  const [state, setState] = useState(value);

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
