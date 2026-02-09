import React from 'react';
import { HardHat, Wrench, Building2, Ruler, ArrowRight, Phone } from 'lucide-react';

const HomePage = () => {
  const services = [
    { title: "Démolition", desc: "Démolition sélective et totale de bâtiments.", icon: <Building2 className="text-orange-500" size={32} /> },
    { title: "Aménagement", desc: "Optimisation de vos espaces extérieurs et intérieurs.", icon: <Ruler className="text-orange-500" size={32} /> },
    { title: "Rénovation", desc: "Remise à neuf complète de vos structures.", icon: <Wrench className="text-orange-500" size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* SECTION HERO (Basée sur votre image Cyril BTP) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay sombre */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Chantier BTP" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-orange-500 font-montserrat font-black uppercase tracking-[0.3em] text-sm md:text-base animate-pulse">
              Expertise & Sécurité
            </h2>
            <h1 className="text-5xl md:text-7xl font-anton uppercase leading-tight tracking-tight">
              Travaux de <span className="text-orange-500">démolition</span> et aménagement par <span className="border-b-4 border-orange-600">Cyril BTP</span>
            </h1>
            <p className="text-lg md:text-xl font-lato text-slate-300 max-w-xl">
              Spécialiste de la démolition de bâtiment extérieur et intérieur. Nous intervenons avec précision pour préparer vos futurs projets.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-montserrat font-bold flex items-center gap-2 transition-all transform hover:scale-105">
                Demander un devis <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-montserrat font-bold transition-all">
                Nos Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES RAPIDES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-anton text-3xl md:text-4xl text-slate-900 uppercase">Nos Domaines d'Intervention</h3>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border-b-4 border-transparent hover:border-orange-500 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h4 className="font-montserrat font-bold text-xl mb-4 text-slate-900 uppercase tracking-wide">{service.title}</h4>
              <p className="font-lato text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BANNIÈRE APPEL À L'ACTION */}
      <section className="bg-orange-600 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-4">
            <Phone size={40} className="animate-bounce" />
            <div>
              <p className="font-montserrat font-bold uppercase text-sm opacity-80">Besoin d'une intervention urgente ?</p>
              <p className="font-anton text-2xl md:text-3xl">+212 600 000 000</p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black transition-colors">
            Contactez-nous
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;