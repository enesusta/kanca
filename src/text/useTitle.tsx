import React from 'react';

const useTitle = (locale: string) => (param: string) => `${param.substring(0, 1).toLocaleUpperCase(locale)}${param.substring(1)}`;

export default useTitle;
