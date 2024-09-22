import React, { useCallback, useRef } from 'react';

const useScrollIntoView = () => {
  const viewport = useRef<HTMLDivElement | any>(null);

  const bottom = useCallback(() => {
    viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
  }, []);

  const top = useCallback(() => {
    viewport.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const center = useCallback(() => {
    viewport.current.scrollTo({ top: viewport.current.scrollHeight / 2, behavior: 'smooth' });
  }, []);

  return {
    viewport,
    bottom,
    top,
    center,
  };
};

export default useScrollIntoView;
