import React from 'react';
import { 
  Facebook, Instagram, Linkedin, Mail, 
  MapPin, Phone, ShieldCheck, Clock, Hash, Twitter
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1d] text-slate-400 pt-20 pb-8 border-t border-white/5 font-montserrat relative overflow-hidden">
      {/* Accent de couleur décoratif en arrière-plan */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1: LOGO & IDENTITY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center p-1.5 bg-white rounded-xl shadow-lg">
                <img 
                  src="/logo2.png" 
                  alt="Cyril BTP" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <span className="text-white font-anton text-2xl tracking-tighter uppercase">
                Cyril <span className="text-orange-500">BTP</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Expertise en démolition, terrassement et rénovation. 
              Nous bâtissons vos projets avec la rigueur et la sécurité d'un artisan passionné.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 bg-slate-800/50 border border-white/5 rounded-xl hover:bg-orange-600 hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLONNE 2: EXPERTISES */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Nos Expertises
            </h3>
            <ul className="space-y-4">
              {[
                'Démolition de précision',
                'Terrassement massif',
                'Aménagement extérieur',
                'Gros œuvre & Maçonnerie'
              ].map((service) => (
                <li key={service} className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors cursor-pointer group">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600 group-hover:scale-150 transition-transform"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3: INFOS PRATIQUES */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Informations
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <Clock className="text-orange-500 shrink-0" size={20} />
                <div className="text-sm">
                  <p className="text-white font-bold">Horaires d'ouverture</p>
                  <p className="mt-1">Lun - Ven: 08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Hash className="text-orange-500 shrink-0" size={20} />
                <div className="text-sm">
                  <p className="text-white font-bold">Identification</p>
                  <p className="mt-1 italic">SIRET: 494 262 371</p>
                </div>
              </li>
            </ul>
          </div>

          {/* COLONNE 4: CONTACT DIRECT */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-8 text-xs flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500"></span> Contact Direct
            </h3>
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 space-y-4">
              <a href="tel:+33622892916" className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center bg-orange-600/10 text-orange-500 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold text-slate-200">06 22 89 29 16</span>
              </a>
              <a href="mailto:cyrilbenony@gmail.com" className="flex items-center gap-4 group">
                <div className="h-10 w-10 flex items-center justify-center bg-orange-600/10 text-orange-500 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-xs font-bold text-slate-200 break-all">cyrilbenony@gmail.com</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center bg-orange-600/10 text-orange-500 rounded-lg shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-xs leading-relaxed">33380 Marcheprime,<br /> France</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            © {currentYear} <span className="text-slate-400">Cyril BTP</span> - Tous droits réservés
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Accessibilité</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Conditions</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;