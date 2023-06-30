import React from 'react';

const useLowercase =
  (locale: string = 'tr-TR') =>
  (param: string) =>
    param.toLocaleLowerCase(locale);

export default useLowercase;
