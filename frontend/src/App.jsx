import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import Layout from './component/layout/Layout';


const PageLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);
const App = () => {
  

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Route Admin Directe */}
        
        
        <Route
          path="/*"
          element={
            <Layout>
              {/* <Header /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App