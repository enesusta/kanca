import { useParams } from 'react-router-dom';

const useHttpParam = (key: string) => {
  const params = useParams();
  return params[key];
};

export default useHttpParam;