import React from 'react';
import { useNavigate as useNavigateNative } from 'react-router-dom';

const useRouter = () => {
  const navigate = useNavigateNative();
  return (path: string) => navigate(path);
};

export default useRouter;
