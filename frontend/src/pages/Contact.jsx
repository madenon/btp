import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Hash } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-screen pt-28 pb-12 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="font-anton text-5xl md:text-6xl text-[#0a0f1d] uppercase tracking-tighter">
            Parlons de votre <span className="text-orange-600">Projet</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg font-medium">
            Besoin d'un devis ou d'une expertise ? Basés à Marcheprime, nous intervenons rapidement pour tous vos travaux de BTP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Carte Adresse */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-600">
                <MapPin className="text-orange-600 mb-4" size={28} />
                <h3 className="font-anton uppercase text-[#0a0f1d] mb-2 tracking-wide">Localisation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  33380 Marcheprime<br />
                  Gironde, France
                </p>
              </div>

              {/* Carte Contact Direct */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#0a0f1d]">
                <Phone className="text-[#0a0f1d] mb-4" size={28} />
                <h3 className="font-anton uppercase text-[#0a0f1d] mb-2 tracking-wide">Urgence / Devis</h3>
                <p className="text-slate-600 text-sm font-bold">06 22 89 29 16</p>
                <p className="text-slate-600 text-sm">cyrilbenony@gmail.com</p>
              </div>
            </div>

            {/* Carte Horaires & SIRET */}
            <div className="bg-[#0a0f1d] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <Clock className="text-orange-500 mb-4" size={28} />
                <h3 className="font-anton uppercase text-2xl mb-4 text-orange-500 tracking-wide">Horaires d'ouverture</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Lundi - Vendredi</span>
                    <span className="text-white font-bold">08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-white font-bold">09:00 - 12:00</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-400 text-xs italic">
                    <Hash size={14} className="text-orange-500" />
                    <span>SIRET : 494 262 371</span>
                </div>
              </div>

              {/* Décoration industrielle en fond */}
              <div className="absolute -bottom-4 -right-4 opacity-5 font-anton text-9xl rotate-12 pointer-events-none">
                BTP
              </div>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Nom Complet</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 focus:border-orange-500 focus:bg-white outline-none transition-all" placeholder="Ex: Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 focus:border-orange-500 focus:bg-white outline-none transition-all" placeholder="06.." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Type de travaux</label>
                <select className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 focus:border-orange-500 focus:bg-white outline-none transition-all appearance-none">
                  <option>Démolition</option>
                  <option>Terrassement</option>
                  <option>Rénovation / Maçonnerie</option>
                  <option>Aménagement extérieur</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Votre Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-5 py-4 focus:border-orange-500 focus:bg-white outline-none transition-all" placeholder="Décrivez votre projet..."></textarea>
              </div>

              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 hover:bg-[#0a0f1d] text-white font-anton uppercase text-xl py-5 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                Envoyer la demande <Send size={22} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;