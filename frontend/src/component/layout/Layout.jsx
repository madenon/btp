import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    // "relative" ici aide à stabiliser les enfants fixed/sticky
    <div className="min-h-screen flex flex-col bg-white relative"> 
      <Navbar />
      {/* On ajoute "relative z-0" au main pour s'assurer que TOUT le contenu 
          de la page reste dans une couche inférieure à la Navbar (z-1000)
      */}
      <main className="w-full relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;