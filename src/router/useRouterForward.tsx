import React from 'react';
import { useNavigate } from 'react-router-dom';

const useRouterForward = (step: number = 1) => {
  const navigate = useNavigate();
  return () => navigate(step);
};

export default useRouterForward;