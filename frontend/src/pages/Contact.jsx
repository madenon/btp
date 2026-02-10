import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Hash, 
  HardHat 
} from 'lucide-react';

const Contact = () => {
  // URL Google Maps centrée sur Marcheprime 33380
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45303.43615291255!2d-0.8920956499999999!3d44.71111665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5496030913961d%3A0x406651748171090!2s33380%20Marcheprime!5e0!3m2!1sfr!2sfr!4v1715600000000!5m2!1sfr!2sfr";

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-[#FCFCFD]">
      
      {/* BACKGROUND DESIGN : Sync avec l'esprit épuré */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* EN-TÊTE : Titre Noir Impactant */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="text-orange-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">
            Disponibilité & Réactivité
          </span>
          
          <h2 className="font-anton text-4xl md:text-3xl leading-[0.85] uppercase tracking-tighter text-[#0a0f1d] italic">
            Lancez votre <br />
            <span className="text-orange-500 relative inline-block mt-2">
                Chantier
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-orange-500 rounded-full shadow-[0_5px_15px_rgba(249,115,22,0.3)]"></div>
            </span>
          </h2>
        </motion.div>

        {/* GRILLE DE CONTACT : Synchronisée avec les données du Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* CARTE 1 : TÉLÉPHONE */}
          <motion.a 
            href="tel:+33622892916"
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
              <Phone size={28} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#0a0f1d] font-black uppercase text-xl mb-1 tracking-tighter">Téléphone</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase mb-6 tracking-widest italic">Ligne Directe</p>
            <span className="text-2xl font-black text-[#0a0f1d]">06 22 89 29 16</span>
          </motion.a>

          {/* CARTE 2 : EMAIL */}
          <motion.a 
            href="mailto:cyrilbenony@gmail.com"
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
              <Mail size={28} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#0a0f1d] font-black uppercase text-xl mb-1 tracking-tighter">Email</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase mb-6 tracking-widest italic">Demande de devis</p>
            <span className="text-lg font-bold text-[#0a0f1d] border-b-2 border-orange-500/20 group-hover:border-orange-500 transition-all">
                cyrilbenony@gmail.com
            </span>
          </motion.a>

          {/* CARTE 3 : SECTEUR (Dark Sync avec le Footer) */}
          <motion.div 
            className="bg-[#0a0f1d] rounded-[2.5rem] p-10 text-white flex flex-col items-center text-center relative overflow-hidden shadow-[0_30px_60px_rgba(10,15,29,0.25)]"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
              <MapPin size={28} />
            </div>
            <h3 className="font-black uppercase text-xl mb-1 tracking-tighter">Localisation</h3>
            <p className="text-orange-500 text-[10px] font-bold uppercase mb-6 tracking-widest italic">Siège Social</p>
            <span className="text-lg font-bold leading-tight uppercase">
                33380 Marcheprime<br />
                <span className="text-white/60 text-sm font-medium italic">Gironde & Bassin</span>
            </span>
            <HardHat className="absolute -bottom-6 -right-6 text-white opacity-[0.05] w-32 h-32 -rotate-12" />
          </motion.div>
        </div>

        {/* MAPS GOOGLE : Précise pour Marcheprime */}
        <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.06)] border border-slate-100 h-[450px] relative group">
          <iframe
            title="Localisation Cyril BTP"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: 'grayscale(0.1) contrast(1.1) brightness(1.02)' 
            }}
            allowFullScreen=""
            loading="lazy"
            className="group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        {/* BARRE D'INFOS INFÉRIEURE (Double Check avec le Footer) */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 bg-slate-50 py-3 px-6 rounded-full border border-slate-100">
                <Clock size={18} className="text-orange-600" />
                <p className="text-[11px] tracking-widest uppercase font-bold text-[#0a0f1d]">
                  Horaires : <span className="text-orange-600 ml-2">Lun - Ven : 08:00 - 18:00</span>
                </p>
            </div>
            <div className="flex items-center gap-4 opacity-40">
                <Hash size={16} className="text-slate-900" />
                <p className="font-mono text-[10px] font-bold text-orange-900 tracking-[0.2em]">
                  SIRET : 494 262 371
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;