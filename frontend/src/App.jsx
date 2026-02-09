import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import Layout from './component/layout/Layout';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';
import About from './component/About';


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
              <Route path="/realisations" element={<Realisation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/a-propos" element={<About />} />
            </Routes>
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App