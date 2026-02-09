
import React, { useState } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('nl');
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden pb-32 lg:pb-0">
      <Header currentLang={lang} setLang={setLang} t={t.nav} />

      <main className="flex-grow">
        <Hero t={t.hero} />

        {/* Reservation Section */}
        <section id="booking" className="py-48 bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none diamond-pattern"></div>

          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-16">
                <div className="space-y-8 animate-fade-in-up">
                  <div className="inline-flex items-center gap-3 py-1 px-4 border border-white/10 glass-morphism rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/60">Fleet Live Status: Available</span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-serif-display italic text-white leading-tight">
                    Your Journey, <br />Defined.
                  </h2>
                  <p className="text-lg text-white/40 font-light leading-relaxed max-w-md italic">
                    {lang === 'nl'
                      ? "Vanuit de haven tot het hartje van 't Stad, onze Mercedes V-Klasse vloot garandeert een onberispelijke rit."
                      : lang === 'en'
                        ? "From the port to the heart of Antwerp, our professional Mercedes-Benz fleet ensures a flawless journey."
                        : lang === 'fr'
                          ? "Du port au cœur d'Anvers, notre flotte professionnelle Mercedes-Benz garantit un voyage sans faille."
                          : "Del puerto al corazón de Amberes, nuestra flota premium Mercedes-Benz garantiza un viaje impecable."}
                  </p>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-white/5 glass-morphism group hover:border-[#D4AF37]/30 transition-all">
                    <i className="fas fa-shield-halved text-2xl text-[#D4AF37] mb-6"></i>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">Verified Safety</h4>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Global Chauffeur Standards</p>
                  </div>
                  <div className="p-10 border border-white/5 glass-morphism group hover:border-[#D4AF37]/30 transition-all">
                    <i className="fas fa-wifi text-2xl text-[#D4AF37] mb-6"></i>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">Onboard Connect</h4>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Business Connectivity Kit</p>
                  </div>
                </div>
              </div>

              <div className="sticky top-32">
                <BookingForm t={t.booking} />
              </div>
            </div>
          </div>
        </section>

        <Features t={t.features} />

        {/* Fleet Detail Section */}
        <section id="fleet" className="py-48 bg-[#0a0a0b] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden border border-white/5 glass-morphism bg-black/20">
                <img
                  src="/assets/mercedes-v-class.png"
                  alt="Mercedes V-Class Exterior Luxury"
                  className="w-full h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110 p-4"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">The Ultimate Chauffeur Carriage</span>
                <h2 className="text-5xl lg:text-7xl font-serif-display italic text-white">Mercedes V-Class</h2>
                <p className="text-white/40 font-light italic leading-relaxed text-lg italic">
                  More than a vehicle, it is your private executive suite on the move.
                </p>
              </div>

              <ul className="space-y-8">
                {[
                  { icon: 'fa-wifi', text: 'High-speed Onboard Connectivity' },
                  { icon: 'fa-bottle-water', text: 'Chilled Refreshments & Fine Comforts' },
                  { icon: 'fa-user-tie', text: 'Discreet, Multilingual Professional Chauffeurs' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 group/item">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/item:border-[#D4AF37] transition-colors">
                      <i className={`fas ${item.icon} text-xs text-white/30 group-hover/item:text-[#D4AF37]`}></i>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/60 group-hover/item:text-white transition-colors">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* Luxury Banner */}
        <section className="py-64 bg-white relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%)]"></div>
          <div className="text-center relative z-10 px-8">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-black/20 mb-8 block">The Automotive Legend</span>
            <h2 className="text-7xl lg:text-[150px] font-serif-display font-black text-black tracking-tighter leading-none opacity-90">MERCEDES-BENZ</h2>
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-[1px] w-24 bg-black/10"></div>
              <span className="text-xs font-extrabold uppercase tracking-[0.5em] text-black">V-Class Excellence</span>
              <div className="h-[1px] w-24 bg-black/10"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Floating Action - High Polish */}
      <div className="fixed bottom-10 left-6 right-6 lg:hidden z-50">
        <div className="glass-morphism p-3 rounded-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex gap-3">
          <a
            href="tel:+32478617101"
            className="flex-1 bg-white text-black py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 active:scale-95 transition-all"
          >
            <i className="fas fa-phone-alt"></i> Call
          </a>
          <a
            href="https://wa.me/32478617101"
            className="flex-1 bg-white/10 text-white py-5 rounded-full font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 border border-white/10 active:scale-95 transition-all"
          >
            <i className="fab fa-whatsapp"></i> Chat
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
