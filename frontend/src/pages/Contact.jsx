import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

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
          <h2 className="font-anton text-5xl md:text-6xl text-[#1e293b] uppercase tracking-tighter">
            Parlons de votre <span className="text-orange-500">Projet</span>
          </h2>
          <p className="text-slate-500 font-roboto mt-4 max-w-2xl text-lg">
            Besoin d'un devis ou d'une expertise pour vos travaux ? Notre équipe basée en France vous répond sous 48h.
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
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-500">
                <MapPin className="text-orange-500 mb-4" size={28} />
                <h3 className="font-anton uppercase text-[#1e293b] mb-2">Siège Social</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  123 Avenue du Chantier<br />
                  75017 Paris, France
                </p>
              </div>

              {/* Carte Contact Direct */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#1e293b]">
                <Phone className="text-[#1e293b] mb-4" size={28} />
                <h3 className="font-anton uppercase text-[#1e293b] mb-2">Urgence / Devis</h3>
                <p className="text-slate-600 text-sm">01 23 45 67 89</p>
                <p className="text-slate-600 text-sm">contact@cyril-btp.fr</p>
              </div>
            </div>

            {/* Carte Horaires */}
            <div className="bg-[#1e293b] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
              <Clock className="text-orange-500 mb-4" size={28} />
              <h3 className="font-anton uppercase text-2xl mb-4 text-orange-500">Horaires d'ouverture</h3>
              <ul className="space-y-3 font-roboto text-slate-300">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white font-bold">08:00 - 18:30</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-white font-bold">09:00 - 12:00</span>
                </li>
              </ul>
              {/* Décoration industrielle */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-anton text-6xl rotate-12">BTP</div>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nom Complet</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Téléphone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all" placeholder="06..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Type de travaux</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all">
                  <option>Rénovation complète</option>
                  <option>Gros œuvre / Construction</option>
                  <option>Extension / Agrandissement</option>
                  <option>Autre projet</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Votre Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all" placeholder="Décrivez votre projet en quelques mots..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-anton uppercase text-xl py-4 rounded-xl shadow-lg shadow-orange-900/20 flex items-center justify-center gap-3 transition-colors"
              >
                Envoyer la demande <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;