import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden"> 
      {/* La Navbar est fixed, elle ne prend pas de place dans le flux */}
      <Navbar />

      {/* On ajoute un padding-top (pt-20) pour compenser la hauteur de la Navbar fixed (h-20) 
          Sinon le haut de votre HomePage sera caché sous la barre bleue.
      */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;