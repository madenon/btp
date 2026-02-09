import React, { useState } from 'react';
import { Menu, X, Phone, HardHat, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Devis', href: '#' },
    { name: 'Emploi', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-orange-500/30 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <HardHat className="text-white" size={20} />
            </div>
            <span className="text-white font-anton text-xl tracking-wider uppercase">
              Cyril <span className="text-orange-500">BTP</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-orange-500 text-xs font-bold uppercase tracking-widest transition-all">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-orange-500 p-2">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER (MENU LATÉRAL) */}
      <div className={`fixed inset-0 z-[60] transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Menu Content */}
        <div className="absolute right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col">
          
          {/* Header du Menu */}
          <div className="p-6 flex justify-between items-center border-b border-slate-100">
            <span className="font-anton text-slate-900 text-xl uppercase">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-orange-500 transition-colors">
              <X size={28} />
            </button>
          </div>

          {/* Liens de Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-8 py-5 text-slate-700 font-bold uppercase tracking-widest border-b border-slate-50 hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                {link.name}
                <ChevronRight size={18} className="text-slate-300" />
              </a>
            ))}
            
            <div className="px-8 py-6 text-orange-600 font-black italic uppercase">
              Espace Admin
            </div>
          </div>

          {/* Footer du Menu (Appel) */}
          <div className="p-8 bg-slate-50">
            <a 
              href="tel:+2126000000"
              className="flex items-center justify-center gap-3 bg-orange-600 text-white w-full py-4 rounded-xl font-bold uppercase shadow-lg shadow-orange-600/30"
            >
              <Phone size={20} />
              Nous Appeler
            </a>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-tighter">
              Disponible 24h/7j pour urgences
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;