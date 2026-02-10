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
    { name: 'Nos Réalisations', to: '/realisations' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* BARRE DE NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#1e293b] border-b border-orange-500/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
          {/* SECTION LOGO - STYLE PREMIUM BADGE */}
<Link to="/" className="flex items-center gap-4 group cursor-pointer relative">
  {/* Le "Badge" blanc qui fait ressortir le logo noir */}
  <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transform group-hover:-translate-y-1 group-hover:rotate-2 transition-all duration-300 ease-out overflow-hidden">
    <img 
      src="/logo2.png" 
      alt="Cyril BTP" 
      className="h-full w-full object-cover scale-110" // On scale un peu pour supprimer les bords de l'image d'origine
    />
    {/* Effet de brillance au survol */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  </div>

  {/* Texte avec typographie retravaillée */}
  <div className="flex flex-col">
    <div className="flex items-baseline gap-1">
      <span className="text-white font-anton text-3xl leading-none uppercase tracking-tight group-hover:text-orange-500 transition-colors">
        Cyril
      </span>
      <span className="text-orange-500 font-anton text-3xl leading-none uppercase tracking-tight">
        BTP
      </span>
    </div>
    <div className="flex items-center gap-2 mt-1.5">
      <span className="h-[1px] w-4 bg-orange-500/50"></span>
      <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.25em] whitespace-nowrap">
        Construction & Rénovation
      </span>
    </div>
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