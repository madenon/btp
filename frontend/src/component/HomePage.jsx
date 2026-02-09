import React from 'react';
import { Building2, Ruler, Wrench, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const HomePage = () => {
  const services = [
    { title: "Démolition", desc: "Démolition sélective et totale de bâtiments.", icon: <Building2 className="text-orange-500" size={32} /> },
    { title: "Aménagement", desc: "Optimisation de vos espaces extérieurs et intérieurs.", icon: <Ruler className="text-orange-500" size={32} /> },
    { title: "Rénovation", desc: "Remise à neuf complète de vos structures.", icon: <Wrench className="text-orange-500" size={32} /> },
  ];

  const realisations = [
    {
      id: "01",
      title: "Démolition Industrielle",
      desc: "Déconstruction de structures métalliques et béton avec gestion des déchets.",
      image: "/img1.png",
      points: ["SÉCURISATION", "TRI SÉLECTIF", "CONCASSAGE"]
    },
    {
      id: "02",
      title: "Terrassement & Fouilles",
      desc: "Préparation des sols pour fondations et réseaux divers (VRD).",
      image: "/img2.png",
      points: ["NIVELLEMENT", "EXCAVATION", "REMBLAIEMENT"]
    },
    {
      id: "03",
      title: "Aménagement Urbain",
      desc: "Création d'espaces publics, pose de bordures et pavage professionnel.",
      image: "/img3.png",
      points: ["PAVAGE", "VRD", "ACCESSIBILITÉ"]
    },
    {
      id: "04",
      title: "Gros Œuvre & Maçonnerie",
      desc: "Construction de murs porteurs et structures en béton armé.",
      image: "/img4.png",
      points: ["COFFRAGE", "FERRAILLAGE", "COULAGE"]
    },
    {
      id: "05",
      title: "Voirie et Réseaux (VRD)",
      desc: "Installation de réseaux d'assainissement et préparation de chaussées.",
      image: "/img5.png",
      points: ["CANALISATIONS", "ENROBÉS", "DRAINAGE"]
    },
    {
      id: "06",
      title: "Rénovation de Façades",
      desc: "Remise en état esthétique et thermique des murs extérieurs.",
      image: "/img6.png",
      points: ["NETTOYAGE", "ENDUITS", "ISOLATION"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-montserrat">
      
      {/* SECTION HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Chantier BTP" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center md:text-left w-full">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-base">
              Expertise & Sécurité
            </h2>
            <h1 className="text-6xl md:text-8xl font-anton uppercase leading-[0.9] tracking-tighter">
              Travaux BTP <br />
              <span className="text-orange-500">par Cyril</span>
            </h1>
            <p className="text-xl font-medium text-slate-300 max-w-xl italic">
              "Du terrassement à la démolition, nous bâtissons l'avenir avec précision et rigueur."
            </p>
            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-orange-600/30 flex items-center gap-3">
                Demander un devis <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES RAPIDES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="mb-6 inline-block p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(service.icon, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h4 className="font-anton text-2xl mb-4 text-slate-900 uppercase tracking-tight">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION RÉALISATIONS ZIG-ZAG PROFESSIONNEL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-24">
            <h3 className="font-anton text-5xl md:text-6xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
              Nos Réalisations
            </h3>
            <div className="w-20 h-2 bg-orange-600 rounded-full"></div>
          </div>

          {realisations.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-16 mb-40 last:mb-0 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE AVEC CADRE ARRONDI (STYLE SCREENSHOT) */}
              <div className="w-full md:w-1/2">
                <div className="bg-[#F3E5D8] p-4 rounded-[2.5rem] shadow-sm transition-transform duration-500 hover:scale-[1.02]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="rounded-[2rem] w-full h-[450px] object-cover shadow-inner"
                  />
                </div>
              </div>

              {/* CONTENU TEXTE (STYLE SCREENSHOT) */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <span className="text-5xl font-anton text-slate-100 block mb-2">{item.id}</span>
                  <h3 className="text-4xl font-anton text-slate-900 uppercase tracking-tight leading-none">
                    {item.title}
                  </h3>
                </div>

                <div className="flex gap-6">
                  {/* Trait orange vertical comme sur votre image */}
                  <div className="w-1.5 bg-orange-500 rounded-full h-auto"></div>
                  <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                    {item.desc}
                  </p>
                </div>

                {/* Points techniques en badges blancs */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {item.points.map((point, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 bg-white border border-slate-100 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
                    >
                      <CheckCircle2 size={16} className="text-orange-500" />
                      <span className="text-[11px] font-black tracking-widest text-slate-800 uppercase">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNIÈRE APPEL À L'ACTION (CTA) */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-10 text-white">
          <div className="space-y-4">
            <h4 className="font-anton text-5xl md:text-6xl uppercase tracking-tighter">Un projet de démolition ?</h4>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Nous intervenons partout pour transformer vos contraintes techniques en solutions durables.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <a href="tel:+2126000000" className="flex items-center justify-center gap-4 bg-orange-600 px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-tighter hover:bg-orange-700 transition-all shadow-2xl shadow-orange-600/20">
              <Phone size={28} className="animate-pulse" />
              +212 600 000 000
            </a>
            <button className="bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-tighter border-b-8 border-slate-300 active:border-b-0 active:translate-y-1 transition-all">
              Demander Devis
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;