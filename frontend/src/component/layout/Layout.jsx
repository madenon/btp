import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white"> 
      <Navbar />
      {/* pt-20 correspond à la hauteur h-20 de la navbar */}
      <main className="flex-grow pt-20 relative z-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;