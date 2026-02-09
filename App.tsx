
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import { translations } from './translations';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('nl');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32 lg:pb-0">
      <Header currentLang={lang} setLang={setLang} t={t.nav} />

      <main>
        <Hero t={t.hero} />

        <Features t={t.features} />

        <ServiceAreas t={t.serviceAreas} />

        {/* Fleet Detail Section */}
        <section id="fleet" className="py-48 bg-[#0a0a0b] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative aspect-video overflow-hidden border border-white/5 glass-morphism bg-black/20">
                  <img
                    src="/assets/mercedes-v-class-exterior.png"
                    alt="Mercedes V-Class Exterior"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/80">{t.fleet.exteriorLabel}</span>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative aspect-video overflow-hidden border border-white/5 glass-morphism bg-black/20">
                  <img
                    src="/assets/mercedes-v-class-interior.png"
                    alt="Mercedes V-Class Interior"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1 rounded-full">
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/80">{t.fleet.interiorLabel}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">{t.fleet.badge}</span>
                <h2 className="text-5xl lg:text-7xl font-serif-display italic text-white">{t.fleet.title}</h2>
                <p className="text-white/40 font-light italic leading-relaxed text-lg">
                  {t.fleet.description}
                </p>
              </div>

              <ul className="space-y-8">
                {[
                  { icon: 'fa-wifi', text: t.fleet.features[0] },
                  { icon: 'fa-bottle-water', text: t.fleet.features[1] },
                  { icon: 'fa-user-tie', text: t.fleet.features[2] }
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

        {/* Global CTA / Booking Section */}
        <section id="booking" className="py-48 bg-black relative">
          <div className="max-w-3xl mx-auto px-8">
            <BookingForm t={t.booking} />
          </div>
        </section>
      </main>

      <Footer t={t.footer} />

      {/* Luxury Floating CTA for Mobile ONLY - Fixed reaching absolute bottom */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-[90%] flex gap-4 animate-slide-up">
        <a
          href="tel:+32478617101"
          className="flex-1 glass-morphism bg-white text-black text-[10px] font-black uppercase tracking-widest py-6 px-4 rounded-full flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-all"
        >
          <i className="fas fa-phone-alt"></i>
          {t.hero.ctaPhone.includes(':') ? t.hero.ctaPhone.split(':')[1].trim() : t.hero.ctaPhone}
        </a>
        <a
          href="https://wa.me/32478617101"
          className="w-16 h-16 glass-morphism bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl shadow-2xl active:scale-90 transition-all"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
