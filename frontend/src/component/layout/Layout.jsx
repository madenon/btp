import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD] selection:bg-orange-500 selection:text-white"> 
      {/* Navbar fixe en haut */}
      <Navbar />
      
      {/* pt-20 : on pousse le contenu sous la navbar.
          flex-grow : pousse le footer vers le bas si la page est courte.
      */}
      <main className="flex-grow pt-10 relative z-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;