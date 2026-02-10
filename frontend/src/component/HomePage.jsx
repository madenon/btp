import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Ruler, Wrench, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    document.title = "Cyril BTP | Terrassement & Démolition à Marcheprime";
  }, []);

  const services = [
    { title: "Démolition", desc: "Démolition sélective et totale de bâtiments.", icon: <Building2 className="text-orange-500" size={32} /> },
    { title: "Aménagement", desc: "Optimisation de vos espaces extérieurs et intérieurs.", icon: <Ruler className="text-orange-500" size={32} /> },
    { title: "Rénovation", desc: "Remise à neuf complète de vos structures.", icon: <Wrench className="text-orange-500" size={32} /> },
  ];

  const realisations = [
    { id: "01", title: "Démolition Industrielle", desc: "Déconstruction de structures métalliques et béton avec gestion des déchets.", image: "/i1.png", points: ["SÉCURISATION", "TRI SÉLECTIF", "CONCASSAGE"] },
    { id: "02", title: "Terrassement & Fouilles", desc: "Préparation des sols pour fondations et réseaux divers (VRD).", image: "/i2.png", points: ["NIVELLEMENT", "EXCAVATION", "REMBLAIEMENT"] },
    { id: "03", title: "Aménagement Urbain", desc: "Création d'espaces publics, pose de bordures et pavage professionnel.", image: "/i3.png", points: ["PAVAGE", "VRD", "ACCESSIBILITÉ"] },
    { id: "04", title: "Gros Œuvre & Maçonnerie", desc: "Construction de murs porteurs et structures en béton armé.", image: "/i4.png", points: ["COFFRAGE", "FERRAILLAGE", "COULAGE"] },
    { id: "05", title: "Voirie et Réseaux (VRD)", desc: "Installation de réseaux d'assainissement et préparation de chaussées.", image: "/i5.png", points: ["CANALISATIONS", "ENROBÉS", "DRAINAGE"] },
    { id: "06", title: "Rénovation de Façades", desc: "Remise en état esthétique et thermique des murs extérieurs.", image: "/i6.png", points: ["NETTOYAGE", "ENDUITS", "ISOLATION"] }
  ];

  // Variantes d'animation pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-montserrat overflow-x-hidden">
      
      {/* SECTION HERO - Entrée douce au chargement */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Chantier BTP" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center md:text-left w-full">
          <div className="max-w-4xl space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm"
            >
              Expertise & Sécurité
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[110px] font-anton uppercase leading-[0.85] tracking-tighter italic"
            >
              Travaux BTP <br />
              <span className="text-orange-500">à Marcheprime</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl text-slate-300 max-w-xl italic border-l-4 border-orange-500 pl-6"
            >
              "Du terrassement à la démolition, expertise et securité"
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="pt-6"
            >
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-orange-600/30 flex items-center gap-3 group">
                Demander un devis <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES - Apparition en cascade */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-8 inline-block p-5 bg-orange-50 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(service.icon, { className: "group-hover:text-white transition-colors duration-500" })}
              </div>
              <h4 className="font-anton text-3xl mb-4 text-slate-900 uppercase tracking-tight">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-lg italic">"{service.desc}"</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION RÉALISATIONS - Animation latérale douce */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-32"
          >
            <h3 className="font-anton text-6xl md:text-8xl text-slate-900 uppercase tracking-tighter mb-4 text-center italic text-shadow">
              Nos Réalisations
            </h3>
            <div className="w-32 h-2.5 bg-orange-600 rounded-full"></div>
          </motion.div>

          {realisations.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-16 mb-56 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* IMAGE */}
                <div className="w-full md:w-3/5 group relative">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#F3E5D8] p-4 rounded-[3rem] shadow-xl overflow-hidden"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="rounded-[2.5rem] w-full h-[550px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                  </motion.div>
                </div>

                {/* TEXTE */}
                <div className="w-full md:w-2/5 space-y-8">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <span className="text-7xl font-anton text-slate-100 block mb-2">{item.id}</span>
                    <h3 className="text-5xl font-anton text-slate-900 uppercase tracking-tight leading-none group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                  </motion.div>

                  <div className="flex gap-6 items-stretch">
                    <div className="w-2 bg-orange-500 rounded-full"></div>
                    <p className="text-slate-600 text-2xl font-medium leading-relaxed italic py-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {item.points.map((point, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -5, backgroundColor: "#fff7ed" }}
                        className="flex items-center gap-3 bg-white border border-slate-100 px-6 py-4 rounded-2xl shadow-sm cursor-default"
                      >
                        <CheckCircle2 size={18} className="text-orange-500" />
                        <span className="text-xs font-black tracking-widest text-slate-800 uppercase">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL - Effet Pulsation */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-orange-500/20 blur-[150px] rounded-full"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-12 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-anton text-4xl md:text-2xl uppercase tracking-tighter">Prêt à démolir ?</h4>
            <p className="text-slate-400 text-2xl max-w-2xl mx-auto italic font-medium">
              "Confiez vos chantiers à un expert local passionné par la précision."
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0622892916" 
              className="flex items-center justify-center gap-4 bg-orange-600 px-12 py-7 rounded-[2rem] font-black text-2xl uppercase tracking-tighter shadow-2xl shadow-orange-600/40"
            >
              <Phone size={32} className="animate-bounce" />
              06 22 89 29 16
            </motion.a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;