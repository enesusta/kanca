import { useMemo } from 'react';

interface UseSleepConfiguration {
  throttle?: number;
}

const useSleep = ({ throttle }: UseSleepConfiguration) => {
  const sleep = useMemo(() => {
    return new Promise(resolve => setTimeout(resolve, throttle ?? 1000));
  }, []);

  return sleep;
};

export default useSleep;