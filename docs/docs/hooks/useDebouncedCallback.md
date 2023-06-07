---
layout: default
title: useDebouncedCallback
parent: Hooks
nav_order: 1
---

This hook is generally used at input.onChange


This is how you can use it:

```tsx
import { useDebouncedCallback } from 'kanca';
import React, { useState } from 'react';

const Kanca = () => {
  const threshold = 1000; // 1 seconds
  const [val, setVal] = useState<string>();
  const [query, setQuery] = useState<string>();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setQuery(value);
  };

  const debounceChangeHandler = useDebouncedCallback<React.ChangeEvent<HTMLInputElement>>(
    changeHandler,
    threshold,
  );

  return <input type="text" onChange={debounceChangeHandler} />;
};

export default Kanca;
```


