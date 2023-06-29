import React from 'react';
import { useNavigate } from 'react-router-dom';

const useRouterPrevious = (step: number = 1) => {
  const negativeStep = ~step + 1;

  const navigate = useNavigate();
  return () => navigate(negativeStep);
};

export default useRouterPrevious;