import React from 'react';
import { 
  Facebook, Instagram, Linkedin, Mail, 
  MapPin, Phone, HardHat, ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-orange-600 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLONNE 1: LOGO & DESCRIPTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <HardHat className="text-white" size={24} />
              </div>
              <span className="text-white font-anton text-2xl tracking-wider uppercase">
                Cyril <span className="text-orange-600">BTP</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-lato">
              Expert en démolition, aménagement extérieur et travaux de bâtiment. 
              Nous bâtissons vos projets avec rigueur, sécurité et passion depuis plus de 10 ans.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-slate-900 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLONNE 2: NAVIGATION RAPIDE */}
          <div>
            <h3 className="text-white font-black uppercase italic mb-6 text-sm tracking-widest border-l-4 border-orange-600 pl-3">
              Navigation
            </h3>
            <ul className="space-y-4">
              {['Accueil', 'À propos', 'Services', 'Devis', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-orange-500 flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3: SERVICES SERVICES */}
          <div>
            <h3 className="text-white font-black uppercase italic mb-6 text-sm tracking-widest border-l-4 border-orange-600 pl-3">
              Nos Expertises
            </h3>
            <ul className="space-y-4 text-sm font-lato text-slate-400">
              <li>Démolition de bâtiment</li>
              <li>Aménagement extérieur</li>
              <li>Terrassement & Voirie</li>
              <li>Maçonnerie générale</li>
              <li>Rénovation intérieure</li>
            </ul>
          </div>

          {/* COLONNE 4: CONTACT */}
          <div>
            <h3 className="text-white font-black uppercase italic mb-6 text-sm tracking-widest border-l-4 border-orange-600 pl-3">
              Nous contacter
            </h3>
            <ul className="space-y-4 font-lato">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-600 shrink-0" size={20} />
                <span className="text-sm">123 Avenue des Travaux, <br /> Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-600 shrink-0" size={20} />
                <a href="tel:+2126000000" className="text-sm hover:text-orange-500 transition-colors">+212 600 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-600 shrink-0" size={20} />
                <a href="mailto:contact@cyrilbtp.com" className="text-sm hover:text-orange-500 transition-colors">contact@cyrilbtp.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* LIGNE DE COPYRIGHT */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">
          <p>© {currentYear} Cyril BTP - Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-600 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;