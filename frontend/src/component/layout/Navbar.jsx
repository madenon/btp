import React, { useState } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Devis', href: '#' },
    { name: 'Emploi', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-slate-900 border-b border-orange-500/30 font-montserrat">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO - Utilisation de flex-nowrap pour éviter l'écrasement */}
          <div className="flex items-center gap-4 flex-nowrap">
            <img 
              src="/logo2.png" 
              alt="Logo" 
              className="h-12 w-auto object-contain shrink-0" 
            />
            <span className="text-white font-anton text-2xl tracking-wider uppercase whitespace-nowrap">
              Cyril <span className="text-orange-500">BTP</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-orange-500 text-xs font-bold uppercase tracking-widest transition-all">
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE - Plus gros pour le tactile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)} 
              className="text-orange-500 p-2 outline-none"
            >
              <Menu size={35} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (DRAWER) - Correction du Z-index pour passer devant le Layout */}
      <div className={`fixed inset-0 z-[10000] md:hidden ${isOpen ? "visible" : "invisible"}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsOpen(false)} 
        />

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-100 bg-slate-50">
            <img src="/logo2.png" className="h-8 w-auto" alt="Logo" />
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-orange-500">
              <X size={30} />
            </button>
          </div>

          <div className="py-4 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-8 py-5 text-slate-800 font-bold uppercase text-sm border-b border-slate-50 hover:bg-orange-50"
              >
                {link.name}
                <ChevronRight size={18} className="text-orange-500" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-0 w-full p-6 bg-slate-50 border-t">
            <a href="tel:+2126000000" className="flex items-center justify-center gap-3 bg-orange-600 text-white py-4 rounded-xl font-bold uppercase shadow-lg active:scale-95 transition-transform">
              <Phone size={20} /> Appeler
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;