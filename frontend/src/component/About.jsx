import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HardHat, Timer, ChevronRight, ChevronLeft, Award } from 'lucide-react';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://static.wixstatic.com/media/9587f9_007442dfbc0f4591aa84cc91772c371a~mv2.jpeg/v1/fill/w_427,h_533,al_c,lg_1,q_80,enc_avif,quality_auto/image0.jpeg",
    "https://static.wixstatic.com/media/9587f9_29c63c059f2d45c6bba910ea0d3a4789~mv2.jpeg/v1/fill/w_576,h_645,al_c,lg_1,q_85,enc_avif,quality_auto/9587f9_29c63c059f2d45c6bba910ea0d3a4789~mv2.jpeg",
    "https://static.wixstatic.com/media/9587f9_b29916837d91449592011743f6e40291~mv2.png/v1/fill/w_514,h_386,fp_0.50_0.50,q_95,enc_avif,quality_auto/9587f9_b29916837d91449592011743f6e40291~mv2.png"
  ];

  // Auto-play du slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const stats = [
    { label: "Années d'expérience", value: "15+" },
    { label: "Projets terminés", value: "350+" },
    { label: "Secteur", value: "33" },
    { label: "Satisfaction", value: "100%" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-[#FCFCFD]">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* SLIDER D'IMAGES PRO */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[550px] md:h-[650px] w-full">
              
              {/* Cadre décoratif orange en arrière-plan */}
              <div className="absolute top-10 -right-4 w-full h-full border-2 border-orange-500/20 rounded-[2rem] z-0"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05, x: -20 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="absolute inset-0 z-10"
                >
                  <img 
                    src={images[currentIndex]} 
                    alt="Cyril BTP Expertise" 
                    className="w-full h-full object-cover rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-4 border-white"
                  />
                  {/* Overlay dégradé léger pour le texte */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[2rem]"></div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation du Slider */}
              <div className="absolute bottom-8 right-8 z-20 flex gap-3">
                <button 
                  onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
                  className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
                  className="p-4 bg-[#0a0f1d] text-white rounded-full shadow-lg hover:bg-orange-500 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Indicateur de progression (Barres) */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-12 w-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-orange-500 h-20' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CONTENU TEXTE */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Expertise & Savoir-Faire
              </span>
              <h2 className="font-anton text-5xl md:text-7xl text-[#0a0f1d] uppercase leading-[0.9] mb-8 italic">
                Construire avec <br />
                <span className="text-orange-500 underline decoration-1 underline-offset-8">Précision</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                <p>
                  Basée à <span className="text-[#0a0f1d] font-bold">Marcheprime</span>, l'entreprise 
                  <span className="text-orange-600 font-bold ml-1 italic uppercase">Cyril BTP</span> incarne la rigueur du bâtiment en Gironde. 
                </p>
                <p className="border-l-4 border-orange-500 pl-6 italic bg-slate-50 py-6 rounded-r-2xl text-[#0a0f1d]/80">
                  "Nous transformons vos visions en structures solides. De la démolition au gros œuvre, notre engagement reste le même : la perfection technique."
                </p>
              </div>

              {/* AVANTAGES FLASH */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck size={18}/>, text: "Garantie Décennale" },
                  { icon: <HardHat size={18}/>, text: "Sécurité Certifiée" },
                  { icon: <Timer size={18}/>, text: "Respect du Planning" },
                  { icon: <Award size={18}/>, text: "Qualité Artisanale" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-orange-200 transition-colors">
                    <div className="text-orange-500">{item.icon}</div>
                    <span className="font-bold text-[#0a0f1d] text-xs uppercase tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* STATS STRIP */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-t border-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="font-anton text-5xl text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-slate-400 uppercase text-[10px] font-black tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;