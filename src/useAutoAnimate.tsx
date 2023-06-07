import autoAnimate from '@formkit/auto-animate';
import React, { useEffect, useRef } from 'react';

const useAutoAnimate = (duration: number = 400) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration });
  }, [parent]);

  return parent;
};

export default useAutoAnimate;