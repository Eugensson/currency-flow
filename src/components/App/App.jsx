import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/SharedLayout/SharedLayout';
const Home = lazy(() => import('../../pages/Home'));
const Converter = lazy(() => import('../../pages/Converter'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/converter"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Converter />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
