import { useMemo } from 'react';

function useInfiniteMemo<T>(data: T): T {
  const memoized = useMemo(() => {
    return data;
  }, []);

  return memoized;
}

export default useInfiniteMemo;