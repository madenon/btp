import React, { Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './component/HomePage';
import Layout from './component/layout/Layout';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';
import About from './component/About';
import Service from './pages/Service';

// Petit utilitaire pour remonter en haut de page à chaque changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="flex justify-center items-center h-screen bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600"></div>
      <p className="font-anton text-slate-900 uppercase tracking-widest text-sm">Chargement...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/realisations" element={<Realisation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Service />} />
                <Route path="/a-propos" element={<About />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;