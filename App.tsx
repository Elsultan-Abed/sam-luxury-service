
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import { translations } from './translations';
import { Language } from './types';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('nl');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32 lg:pb-0">
      <Header currentLang={lang} setLang={setLang} t={t.nav} />

      <main>
        <Hero t={t.hero} />

        <ScrollReveal>
          <Features t={t.features} />
        </ScrollReveal>

        <section id="services-section">
          <ServiceAreas t={t.serviceAreas} />
        </section>

        {/* Fleet Detail Section */}
        <section id="fleet" className="py-24 lg:py-48 bg-[#0a0a0b] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Premium Bento Gallery Redesign */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 h-auto lg:h-[700px]">
              {/* Feature Exterior: Dominant vertical/square feature */}
              <ScrollReveal direction="left" className="md:col-span-12 lg:col-span-7 h-full">
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                  <div className="relative h-[400px] lg:h-full overflow-hidden border border-white/5 glass-morphism bg-black/20 rounded-sm">
                    <img
                      src="/assets/mercedes-v-class-exterior.png"
                      alt="Mercedes V-Class Exterior"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 transform-gpu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">{t.fleet.exteriorLabel}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Interior Stack: Two horizontal strips for layouts */}
              <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-6 lg:gap-8 h-full">
                {/* Interior 6-Seat */}
                <ScrollReveal direction="up" delay={0.1} className="h-full">
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative h-[250px] lg:h-full overflow-hidden border border-white/5 glass-morphism bg-black/20 rounded-sm">
                      <img
                        src="/assets/mercedes-v-class-interior-6.png"
                        alt="Mercedes V-Class Conference Layout (6 Seats)"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 transform-gpu"
                      />
                      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{t.fleet.interior6Label}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Interior 7-Seat */}
                <ScrollReveal direction="up" delay={0.2} className="h-full">
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative h-[250px] lg:h-full overflow-hidden border border-white/5 glass-morphism bg-black/20 rounded-sm">
                      <img
                        src="/assets/mercedes-v-class-interior-7.png"
                        alt="Mercedes V-Class Executive Layout (7 Seats)"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 transform-gpu"
                      />
                      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-1.5 rounded-full">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{t.fleet.interior7Label}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
            <div className="space-y-12">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">{t.fleet.badge}</span>
                  <h2 className="text-5xl lg:text-7xl font-serif-display italic text-white">{t.fleet.title}</h2>
                  <p className="text-white/40 font-light italic leading-relaxed text-lg">
                    {t.fleet.description}
                  </p>
                </div>
              </ScrollReveal>

              <ul className="space-y-8">
                {[
                  { icon: 'fa-wifi', text: t.fleet.features[0] },
                  { icon: 'fa-bottle-water', text: t.fleet.features[1] },
                  { icon: 'fa-user-tie', text: t.fleet.features[2] }
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={0.1 * i}>
                    <li className="flex items-center gap-6 group/item">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/item:border-[#D4AF37] transition-colors">
                        <i className={`fas ${item.icon} text-xs text-white/30 group-hover/item:text-[#D4AF37]`}></i>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-white/60 group-hover/item:text-white transition-colors">{item.text}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Global CTA / Booking Section */}
        <section id="booking" className="py-24 lg:py-48 bg-black relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto px-8">
              <BookingForm t={t.booking} />
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer t={t.footer} />

      {/* Luxury Floating CTA for Mobile ONLY - Improved safe area spacing */}
      <div className="lg:hidden fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] w-[90%] flex gap-4 animate-slide-up">
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
