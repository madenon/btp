import React from 'react';
import { motion } from 'framer-motion';

const Realisation = () => {
  // Liste de 6 projets avec chemins d'images (à placer dans votre dossier public/images/)
  const projets = [
    { 
      id: 1, 
      titre: "Villa Moderne", 
      desc: "Construction complète d'une villa contemporaine avec finitions haut de gamme et structure béton banché.", 
      cat: "Construction",
      img: "/img_1.png" 
    },
    { 
      id: 2, 
      titre: "Entrepôt Logistique", 
      desc: "Charpente métallique de grande portée et dallage industriel quartzé pour un centre de stockage.", 
      cat: "Industriel",
      img: "/img_2.png"
    },
    { 
      id: 3, 
      titre: "Rénovation Haussmannienne", 
      desc: "Réfection totale des parquets, moulures et mise en conformité thermique d'un appartement de prestige.", 
      cat: "Rénovation",
      img: "/img_3.png"
    },
    { 
      id: 4, 
      titre: "Immeuble de Bureaux", 
      desc: "Réalisation du gros œuvre et de la structure primaire pour un complexe tertiaire de 4 étages.", 
      cat: "Gros Œuvre",
      img: "/img_4.png"
    },
    { 
      id: 5, 
      titre: "Piscine à Débordement", 
      desc: "Conception technique et étanchéité d'un bassin de luxe avec terrasse en pierre naturelle.", 
      cat: "Extérieur",
      img: "/images/projet5.jpg"
    },
    { 
      id: 6, 
      titre: "Extension de Maison", 
      desc: "Agrandissement de 40m² en ossature bois avec création d'une toiture terrasse végétalisée.", 
      cat: "Extension",
      img: "/images/projet6.jpg"
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
                // L'image et le texte glissent depuis les côtés opposés
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
              >
                
                {/* BLOC IMAGE AVEC EFFETS SURVOL */}
                <div className="w-full md:w-1/2 group relative">
                  <div className="overflow-hidden rounded-2xl shadow-2xl bg-slate-100 aspect-video relative z-20">
                    {/* Overlay de couleur au survol */}
                    <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    
                    <img 
                      src={projet.img} 
                      alt={projet.titre}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  {/* Décoration arrière-plan (Carré orange) */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -z-10 group-hover:bg-orange-500/20 transition-colors`}></div>
                </div>

                {/* BLOC TEXTE CONTENU */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block text-orange-500 font-black uppercase tracking-[0.4em] text-xs px-3 py-1 border border-orange-500/20 rounded-full">
                      {projet.cat}
                    </span>
                    <h3 className="font-anton text-4xl md:text-5xl text-[#1e293b] uppercase leading-none">
                      {projet.titre}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 font-roboto leading-relaxed text-lg max-w-xl italic border-l-4 border-slate-200 pl-6">
                    "{projet.desc}"
                  </p>

                  <motion.button
                    whileHover={{ gap: "20px" }}
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