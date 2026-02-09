import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "15+" },
    { label: "Projets terminés", value: "350+" },
    { label: "Collaborateurs", value: "12" },
    { label: "Garantie décennale", value: "100%" },
  ];

  const valeurs = [
    {
      title: "Qualité Certifiée",
      desc: "Nous utilisons des matériaux premium pour assurer la longévité de vos ouvrages.",
      icon: <ShieldCheck className="text-orange-500" size={32} />,
    },
    {
      title: "Expertise Terrain",
      desc: "Nos équipes sont formées aux dernières techniques de construction durable.",
      icon: <HardHat className="text-orange-500" size={32} />,
    },
    {
      title: "Respect des Délais",
      desc: "La ponctualité est le pilier de notre relation client.",
      icon: <Award className="text-orange-500" size={32} />,
    },
  ];

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECTION TEXTE ET IMAGE */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-anton text-5xl md:text-6xl text-[#1e293b] uppercase leading-none mb-6">
              Bâtir l'avenir avec <br />
              <span className="text-orange-500">Rigueur & Passion</span>
            </h2>
            <div className="w-20 h-2 bg-orange-500 mb-8"></div>
            <p className="text-slate-600 font-roboto text-lg leading-relaxed mb-6">
              Depuis plus de 15 ans, **Cyril BTP** s'impose comme un acteur majeur de la construction en France. Notre savoir-faire s'étend du gros œuvre complexe à la rénovation d'intérieur haut de gamme.
            </p>
            <p className="text-slate-600 font-roboto text-lg leading-relaxed">
              Nous ne nous contentons pas de construire des murs ; nous créons des espaces de vie durables et sécurisés, en plaçant l'innovation et l'écoute client au cœur de chaque chantier.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2">
              <img 
                src="/img1.png" 
                alt="Équipe Cyril BTP" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Badge d'expérience flottant */}
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-8 rounded-xl shadow-xl font-anton text-center">
              <span className="text-4xl block">15</span>
              <span className="text-sm uppercase tracking-widest">Ans de Savoir-Faire</span>
            </div>
          </motion.div>
        </div>

        {/* SECTION STATISTIQUES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 py-12 border-y border-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="block font-anton text-4xl md:text-5xl text-[#1e293b]">{stat.value}</span>
              <span className="text-slate-500 uppercase text-xs font-black tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* SECTION VALEURS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valeurs.map((valeur, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="mb-6">{valeur.icon}</div>
              <h3 className="font-anton text-2xl text-[#1e293b] uppercase mb-4">{valeur.title}</h3>
              <p className="text-slate-600 font-roboto">{valeur.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;