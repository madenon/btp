import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation du composant Link
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mise à jour des chemins (href -> to)
  const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'À propos', to: '/a-propos' },
    { name: 'Services', to: '/services' },
    { name: 'Devis', to: '/devis' },
    { name: 'Nos Réalisations', to: '/realisations' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* BARRE DE NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#1e293b] border-b border-orange-500/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* SECTION LOGO (Utilisation de Link pour revenir à l'accueil) */}
            <Link to="/" className="flex items-center gap-4 group cursor-pointer">
              <div className="h-12 w-12 flex items-center justify-center p-1.5 bg-white rounded-lg shadow-inner transform group-hover:rotate-3 transition-transform">
                <img 
                  src="/logo2.png" 
                  alt="Cyril BTP" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-anton text-2xl leading-none uppercase tracking-tight">
                  Cyril <span className="text-orange-500">BTP</span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">Construction & Rénovation</span>
              </div>
            </Link>

            {/* LIENS DESKTOP */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.to} 
                  className="text-slate-300 hover:text-orange-500 text-xs font-black uppercase tracking-widest transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* BOUTON APPEL RAPIDE (Note: On garde <a> pour tel: car c'est un lien externe au routeur) */}
            <div className="hidden md:block">
               <a href="tel:06 22 89 29 16" className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all shadow-lg shadow-orange-900/20">
                  <Phone size={14} />
                  Contact d'urgence
               </a>
            </div>

            {/* BOUTON MENU MOBILE */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 text-white hover:bg-slate-700 rounded-lg transition-all"
              >
                <Menu size={30} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE (SIDEBAR) */}
      <div className={`fixed inset-0 z-[200] md:hidden transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/90 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#0f172a] shadow-2xl transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <div className="p-6 flex items-center justify-between border-b border-slate-800">
            <span className="font-anton text-orange-500 text-xl uppercase">Navigation</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-white">
              <X size={30} />
            </button>
          </div>

          <div className="flex flex-col py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="px-8 py-4 flex items-center justify-between border-b border-slate-800/50 hover:bg-slate-800/50 transition-all"
              >
                <span className="text-slate-200 font-bold uppercase text-sm tracking-widest">
                  {link.name}
                </span>
                <ChevronRight size={18} className="text-orange-500" />
              </Link>
            ))}
          </div>

          <div className="absolute bottom-10 w-full px-8">
            <a href="tel:06 22 89 29 16" className="w-full flex items-center justify-center gap-3 bg-orange-600 text-white py-4 rounded-xl font-black uppercase tracking-tighter">
              <Phone size={20} />
              Appeler Maintenant
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;