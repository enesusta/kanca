import React from 'react'

const useSleep = (throttle: number = 1000) => {
  const sleep = new Promise(resolve => setTimeout(resolve, throttle));
  return sleep;
};

export default useSleep;