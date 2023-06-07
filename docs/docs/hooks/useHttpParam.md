---
layout: default
title: useHttpQuery and useHttpParam
parent: Hooks
nav_order: 1
---

Let's assume we have a this kind of route:

```tsx
const RouteContainer = () => {
  return (
    <Router>
      <div className="flex w-screen h-screen">
        <Routes>
           <Route path="/patient" element={<PatientPage />} />
            <Route
              path="/patient/:patientId"
              element={
                <PatientDetailProvider>
                  <PatientDetailPage />
                </PatientDetailProvider>
              }
            />
        </Routes>
      </div>
    </Router>
  );
};
```

When user hit the point that i'll share below:

```http
https://my-awesome-react-webapp.com/patient/1?step=10
```

```tsx
import { useHttpParam, useHttpQuery } from 'kanca';
import React, { useState } from 'react';

const Kanca = () => {
  const { query: step, updateQuery } = useHttpQuery('step');
  const patientId = useHttpParam('patientId');

  return (
    <ul>
      <li>{step}</li>
      <li>{patientId}</li>
    </ul>
  );
};

export default Kanca;
```