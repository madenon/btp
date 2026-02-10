import React from 'react';
import { motion } from 'framer-motion';

const Realisation = () => {
  // Liste mise à jour avec tes fichiers locaux i1.png à i6.png
  const projets = [
    { 
      id: 1, 
      titre: "Villa Moderne", 
      desc: "Construction complète d'une villa contemporaine avec finitions haut de gamme et structure béton banché.", 
      cat: "Construction",
      img: "/i1.png" 
    },
    { 
      id: 2, 
      titre: "Entrepôt Logistique", 
      desc: "Charpente métallique de grande portée et dallage industriel quartzé pour un centre de stockage.", 
      cat: "Industriel",
      img: "/i2.png"
    },
    { 
      id: 3, 
      titre: "Rénovation Haussmannienne", 
      desc: "Réfection totale des parquets, moulures et mise en conformité thermique d'un appartement de prestige.", 
      cat: "Rénovation",
      img: "/i3.png"
    },
    { 
      id: 4, 
      titre: "Immeuble de Bureaux", 
      desc: "Réalisation du gros œuvre et de la structure primaire pour un complexe tertiaire de 4 étages.", 
      cat: "Gros Œuvre",
      img: "/i4.png"
    },
    { 
      id: 5, 
      titre: "Piscine à Débordement", 
      desc: "Conception technique et étanchéité d'un bassin de luxe avec terrasse en pierre naturelle.", 
      cat: "Extérieur",
      img: "/i5.png"
    },
    { 
      id: 6, 
      titre: "Extension de Maison", 
      desc: "Agrandissement de 40m² en ossature bois avec création d'une toiture terrasse végétalisée.", 
      cat: "Extension",
      img: "/i6.png"
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-anton text-5xl md:text-7xl text-[#1e293b] uppercase tracking-tighter">
            Nos <span className="text-orange-500">Réalisations</span>
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4"></div>
          <p className="mt-6 text-slate-500 font-roboto uppercase tracking-widest text-sm">L'excellence au service de vos projets</p>
        </motion.div>

        {/* CONTENEUR DES PROJETS */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projets.map((projet, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
              >
                
                {/* BLOC IMAGE */}
                <div className="w-full md:w-1/2 group relative">
                  <div className="overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-video relative z-20 border border-slate-100">
                    <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={projet.img} 
                      alt={projet.titre}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10`}></div>
                </div>

                {/* BLOC TEXTE */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block text-orange-500 font-black uppercase tracking-[0.4em] text-xs px-3 py-1 border border-orange-500/20 rounded-full">
                      {projet.cat}
                    </span>
                    <h3 className="font-anton text-4xl md:text-5xl text-[#1e293b] uppercase leading-none">
                      {projet.titre}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 font-roboto leading-relaxed text-lg max-w-xl italic border-l-4 border-orange-500 pl-6 bg-slate-50 py-4 rounded-r-xl">
                    "{projet.desc}"
                  </p>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-[#1e293b] font-black uppercase text-sm group"
                  >
                    <span className="bg-[#1e293b] text-white w-10 h-10 flex items-center justify-center rounded-full group-hover:bg-orange-500 transition-colors">
                      {projet.id}
                    </span>
                    <span className="border-b-2 border-orange-500 pb-1">Détails du chantier</span>
                  </motion.button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Realisation;