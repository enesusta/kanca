import React from 'react';

const locale = 'tr-TR';

const useTurkishTitle = () => (param: string) => `${param.substring(0, 1).toLocaleUpperCase(locale)}${param.substring(1)}`;

export default useTurkishTitle;
