import { useMemo } from 'react';

const useSleep = (throttle: number = 1000) => {
  const sleep = useMemo(() => {
    return new Promise(resolve => setTimeout(resolve, throttle));
  }, []);

  return sleep;
};

export default useSleep;