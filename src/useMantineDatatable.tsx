import React, { useState } from 'react';
import { get } from './http/HttpService';
import useDebouncedCallback from './useDebouncedCallback';

interface UseMantineDatatableConfiguration<T> {
  pageSizes?: number[];
  throttle?: number;
  changeHandler: (event: T) => void;
}

function useMantineDatatable<T, F>({ pageSizes, changeHandler, throttle }: UseMantineDatatableConfiguration<T>) {
  const PAGE_SIZES = [20, 25, 30, 40];

  const [f, sf] = useState<boolean>(true);
  const [size, setSize] = useState(pageSizes ? pageSizes[0] : PAGE_SIZES[0]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const sendQuery = async () => {
    sf(true);
    const [data, err] = await get<F>(`/submission?email=${query}&page=${page}&size=${size}`);
    await sleep(500);
    sf(false);
    setContentAndLength(data);
  };

  const retrieveAll = async (page: number, pageSize: number) => {
    sf(true);
    const [data, err] = await get<Page<Submission[]>>(`/submission?email=${query}&page=${page}&size=${pageSize}`);
    await sleep(500);
    sf(false);
    setContentAndLength(data);
  };

  const debounceChangeHandler = useDebouncedCallback<T>(changeHandler, throttle ?? 1000);

  return <div>useQuery</div>;
}

export default useMantineDatatable;
