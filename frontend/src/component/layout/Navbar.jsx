import React, { useState } from 'react';
import { Menu, X, Phone, HardHat } from 'lucide-react';

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
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-orange-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO & NOM */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg">
              <HardHat className="text-white" size={24} />
            </div>
            <span className="text-white font-anton text-2xl tracking-wider uppercase">
              Cyril <span className="text-orange-500">BTP</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-500 font-montserrat text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* BOUTON APPEL (CTA) */}
          <div className="hidden md:block">
            <a 
              href="tel:+2126000000" 
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-poppins font-black italic transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20"
            >
              <Phone size={18} />
              URGENCE TRAVAUX
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-white hover:bg-orange-600 focus:outline-none transition-all"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-orange-500/20 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-slate-300 hover:text-orange-500 font-montserrat font-bold text-center border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="p-4">
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-black italic uppercase">
                Appeler Maintenant
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;