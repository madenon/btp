import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Hash, ChevronRight, HardHat } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE IMPACTANTE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-orange-600 font-black uppercase tracking-[0.3em] text-sm">Disponibilité & Réactivité</span>
          <h2 className="font-anton text-6xl md:text-8xl text-[#0a0f1d] uppercase tracking-tighter mt-4">
            Lancez votre <span className="text-orange-600">Chantier</span>
          </h2>
          <div className="h-2 w-24 bg-orange-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARTE : APPEL DIRECT (LA PLUS IMPORTANTE) */}
          <motion.a 
            href="tel:0622892916"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-orange-600 flex flex-col items-center text-center transition-all"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Phone size={40} />
            </div>
            <h3 className="font-anton text-2xl text-[#0a0f1d] uppercase mb-4">Téléphone</h3>
            <p className="text-slate-500 mb-6">Pour une urgence ou un devis express par téléphone.</p>
            <span className="text-3xl font-black text-[#0a0f1d] group-hover:text-orange-600 transition-colors">06 22 89 29 16</span>
          </motion.a>

          {/* CARTE : EMAIL */}
          <motion.a 
            href="mailto:cyrilbenony@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#0a0f1d] flex flex-col items-center text-center transition-all"
          >
            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-[#0a0f1d] mb-6 group-hover:bg-[#0a0f1d] group-hover:text-white transition-colors">
              <Mail size={40} />
            </div>
            <h3 className="font-anton text-2xl text-[#0a0f1d] uppercase mb-4">Email</h3>
            <p className="text-slate-500 mb-6">Envoyez vos plans ou descriptifs de projet par mail.</p>
            <span className="text-xl font-bold text-[#0a0f1d] break-all">cyrilbenony@gmail.com</span>
          </motion.a>

          {/* CARTE : ZONE D'INTERVENTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0f1d] p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="font-anton text-2xl uppercase mb-4 text-orange-500">Zone d'intervention</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Basés à <span className="text-white font-bold">Marcheprime</span>, nous nous déplaçons dans toute la <span className="text-white font-bold">Gironde (33)</span>.
              </p>
              <div className="mt-8 space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-orange-600" />
                  Bassin d'Arcachon
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-orange-600" />
                  Bordeaux Métropole
                </div>
              </div>
            </div>
            {/* Décoration en fond */}
            <HardHat className="absolute -bottom-6 -right-6 text-white opacity-5 w-40 h-40 -rotate-12" />
          </motion.div>

        </div>

        {/* INFOS COMPLÉMENTAIRES (HORAIRES & LEGAL) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-md flex flex-wrap justify-between items-center gap-8 border border-slate-100"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-slate-50 rounded-full text-orange-600">
              <Clock size={30} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Horaires de bureau</p>
              <p className="text-[#0a0f1d] font-bold">Lun-Ven: 08:00 - 18:00 | Sam: 09:00 - 12:00</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-slate-900 text-white rounded-2xl">
            <Hash size={18} className="text-orange-500" />
            <span className="text-xs font-mono uppercase tracking-tighter">Siret : 494 262 371 00021</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;