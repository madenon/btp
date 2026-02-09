import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, CheckCircle2, Phone, Clock, Euro, Plus, Minus } from 'lucide-react';

const Service = () => {
  const [activeId, setActiveId] = useState(null);

  const contenuServices = [
    {
      id: 1,
      titre: "Démolition de précision",
      texte: "Nous intervenons pour la déconstruction partielle ou totale de structures. Tri sélectif des matériaux et sécurité du chantier garantis.",
      image: "/demoli.png",
      tag: "Expertise",
      details: "Évacuation des gravats incluse, protection des sols mitoyens.",
      prix: "Sur devis",
      duree: "2 à 5 jours"
    },
    {
      id: 2,
      titre: "Terrassement complet",
      texte: "Préparation des sols pour fondations, piscines et chemins d'accès. Nivellement de précision avec engins adaptés.",
      image: "_amen.png",
      tag: "Gros Oeuvre",
      details: "Étude de sol préalable, évacuation des terres excédentaires.",
      prix: "Dès 1500€",
      duree: "3 à 7 jours"
    },
    {
      id: 3,
      titre: "Maçonnerie Générale",
      texte: "Élévation de murs, pose de parpaings et briques. Nous réalisons des structures robustes pour durer dans le temps.",
      image: "desconst_.png",
      tag: "Structure",
      details: "Garantie décennale, respect strict des normes DTU.",
      prix: "Selon projet",
      duree: "Varie"
    },
    {
      id: 4,
      titre: "Dallage & Béton Armé",
      texte: "Coulage de dalles intérieures et extérieures. Finition lissée ou balayée selon vos besoins d'aménagement.",
      image: "desouchage.png",
      tag: "Technique",
      details: "Treillis soudé haute résistance, béton auto-plaçant.",
      prix: "Dès 65€/m²",
      duree: "2 à 4 jours"
    },
    {
      id: 5,
      titre: "Ouverture de Murs Porteurs",
      texte: "Agrandissement d'espaces avec pose de poutrelles IPN. Travail sécurisé pour transformer votre intérieur.",
      image: "/img_1.png",
      tag: "Rénovation",
      details: "Calcul de descente de charge, pose d'étais hydrauliques.",
      prix: "Dès 2200€",
      duree: "3 jours"
    },
    {
      id: 6,
      titre: "Aménagement Extérieur",
      texte: "Création de terrasses, murets de soutènement et pavage pour valoriser vos espaces verts.",
      image: "_8ans.png",
      tag: "Esthétique",
      details: "Pose sur sable ou chape béton, traitement anti-mousse.",
      prix: "Sur devis",
      duree: "5 à 10 jours"
    },
    {
      id: 7,
      titre: "Assainissement & VRD",
      texte: "Raccordement aux réseaux, gestion des eaux pluviales et installation de fosses septiques conformes.",
      image: "/trava_.png",
      tag: "Réseaux",
      details: "Mise aux normes SPANC, test d'étanchéité.",
      prix: "Sur devis",
      duree: "4 à 8 jours"
    },
    {
      id: 8,
      titre: "Rénovation de Façades",
      texte: "Nettoyage, piquage et rejointoiement des murs en pierre ou enduits pour redonner du cachet.",
      image: "legout.png",
      tag: "Patrimoine",
      details: "Chaux hydraulique naturelle, gommage basse pression.",
      prix: "Dès 45€/m²",
      duree: "1 à 2 semaines"
    },
    {
      id: 9,
      titre: "Extension de Maison",
      texte: "Gain de surface habitable avec des agrandissements en maçonnerie traditionnelle parfaitement intégrés.",
      image: "de.png",
      tag: "Agrandissement",
      details: "Suivi de chantier complet, coordination corps d'état.",
      prix: "Sur devis",
      duree: "1 à 3 mois"
    },
    {
      id: 10,
      titre: "Évacuation & Gravats",
      texte: "Évacuation professionnelle des débris de chantier vers les centres de tri agréés. Chantier propre garanti.",
      image: "/_destru.png",
      tag: "Service",
      details: "Benne fournie, recyclage certifié des déchets.",
      prix: "Dès 350€",
      duree: "1 jour"
    }
  ];

  const toggleDetails = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="bg-[#f8fafc] font-montserrat min-h-screen">
      {/* HEADER */}
      <section className="pt-32 pb-12 bg-[#0a0f1d] text-white text-center">
        <h1 className="font-anton text-5xl md:text-7xl uppercase tracking-tighter">
          Nos <span className="text-orange-600">Services</span>
        </h1>
        <p className="text-slate-400 mt-4 uppercase text-[10px] font-bold tracking-[0.3em]">
          Qualité & Expertise artisanale
        </p>
      </section>

      {/* LISTE RÉDUITE ET ANIMÉE */}
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
        {contenuServices.map((item, index) => (
          <motion.div 
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col gap-8 md:items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* IMAGE (Cliquable pour détails) */}
            <div 
              className="flex-1 w-full group cursor-pointer" 
              onClick={() => toggleDetails(item.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-white transition-all duration-300 group-hover:border-orange-500">
                <img 
                  src={item.image} 
                  alt={item.titre} 
                  className="w-full h-[280px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                     <Plus size={16} /> Cliquez pour les détails
                   </p>
                </div>
              </div>
            </div>

            {/* TEXTE ET SLIDE */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-orange-600 font-anton text-2xl opacity-40">0{index + 1}</span>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>
              
              <h2 className="text-3xl font-anton text-[#0a0f1d] uppercase leading-none">{item.titre}</h2>
              <p className="text-slate-500 text-base leading-relaxed">{item.texte}</p>

              <button 
                onClick={() => toggleDetails(item.id)}
                className="flex items-center gap-2 text-orange-600 font-black uppercase text-[10px] tracking-widest group"
              >
                {activeId === item.id ? <Minus size={14}/> : <Plus size={14}/>} 
                {activeId === item.id ? "Refermer" : "Voir tarifs et durée"}
                <div className="h-px w-8 bg-orange-600 transition-all group-hover:w-12"></div>
              </button>

              {/* SLIDE DES DÉTAILS */}
              <AnimatePresence>
                {activeId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-l-4 border-orange-600 rounded-r-2xl shadow-sm space-y-5 mt-2">
                      <p className="text-sm text-slate-600 font-medium italic">
                        "{item.details}"
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><Euro size={18}/></div>
                          <div>
                            <p className="text-[9px] uppercase text-slate-400 font-black">Budget</p>
                            <p className="text-sm font-bold text-[#0a0f1d]">{item.prix}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={18}/></div>
                          <div>
                            <p className="text-[9px] uppercase text-slate-400 font-black">Durée</p>
                            <p className="text-sm font-bold text-[#0a0f1d]">{item.duree}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CONTACT */}
      <section className="bg-[#0a0f1d] py-16 text-center text-white px-4 mt-12">
        <HardHat className="mx-auto mb-6 text-orange-600 animate-bounce" size={48} />
        <h2 className="font-anton text-4xl uppercase mb-8 leading-none">Votre projet commence <span className="text-orange-600">ici</span></h2>
        <a href="tel:0622892916" className="bg-orange-600 hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-xl font-anton text-xl transition-all inline-flex items-center gap-4 shadow-xl shadow-orange-600/20">
          <Phone /> Appeler Cyril BTP
        </a>
      </section>
    </div>
  );
};

export default Service;