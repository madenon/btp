import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Realisation = () => {
  // SEO : Change le titre de l'onglet quand la page est chargée
  useEffect(() => {
    document.title = "Nos Réalisations | Cyril BTP - Expert Construction & Rénovation";
  }, []);

  // Liste de tes 6 projets avec images locales i1.png à i6.png
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
    <section className="min-h-screen pt-32 pb-24 bg-[#FCFCFD] px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7"
        >
          <span className="text-orange-600 font-black uppercase tracking-[0.5em] text-xs mb-4 block">
            Portfolio
          </span>
          <h2 className="font-anton text-4xl md:text-3xl text-[#1e293b] uppercase tracking-tighter leading-none italic">
            Nos <span className="text-orange-500">Chantiers</span>
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-8 mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium text-lg italic leading-relaxed">
            "De la conception à la livraison, découvrez notre savoir-faire à travers nos projets les plus ambitieux."
          </p>
        </motion.div>

        {/* CONTENEUR DES PROJETS */}
        <div className="flex flex-col gap-32 md:gap-56">
          {projets.map((projet, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} // Ease-out quint pour plus de luxe
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                
                {/* BLOC IMAGE AVEC EFFET HOVER AVANCÉ */}
                <div className="w-full md:w-3/5 group relative">
                  <div className="overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-slate-200 aspect-video relative z-20 border border-slate-100">
                    <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                    <img 
                      src={projet.img} 
                      alt={`Projet Cyril BTP : ${projet.titre}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                    />
                  </div>
                  
                  {/* Décoration géométrique derrière l'image */}
                  <div className={`absolute -bottom-10 ${isEven ? '-right-10' : '-left-10'} w-48 h-48 bg-orange-500/5 rounded-full blur-3xl -z-10 group-hover:bg-orange-500/10 transition-colors duration-700`}></div>
                </div>

                {/* BLOC TEXTE CONTENU */}
                <div className="w-full md:w-2/5 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="h-[2px] w-12 bg-orange-500"></span>
                      <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[11px]">
                        {projet.cat}
                      </span>
                    </div>
                    <h3 className="font-anton text-5xl md:text-6xl text-[#1e293b] uppercase leading-[0.9] tracking-tighter transition-colors group-hover:text-orange-500">
                      {projet.titre}
                    </h3>
                  </div>
                  
                  <div className="relative">
                    <p className="text-slate-600 font-roboto leading-relaxed text-xl italic border-l-4 border-orange-500/30 pl-8 bg-slate-50/50 py-6 rounded-r-2xl shadow-sm">
                      "{projet.desc}"
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ x: 15 }}
                    className="flex items-center gap-6 text-[#1e293b] font-black uppercase text-xs tracking-[0.2em] group"
                  >
                    <span className="bg-[#1e293b] text-white w-12 h-12 flex items-center justify-center rounded-2xl rotate-45 group-hover:rotate-0 group-hover:bg-orange-500 group-hover:rounded-full transition-all duration-500">
                      <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 text-lg">
                        {projet.id}
                      </span>
                    </span>
                    <span className="border-b-2 border-transparent group-hover:border-orange-500 pb-1 transition-all">
                      En savoir plus sur ce chantier
                    </span>
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