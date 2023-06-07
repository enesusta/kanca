import { useSearchParams } from 'react-router-dom';

const useHttpQuery = (key: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get(key);
  const updateQuery = (newVal: string) => {
    searchParams.set(key, newVal);
    setSearchParams(searchParams);
  };

  return { query, updateQuery };
};

export default useHttpQuery;
