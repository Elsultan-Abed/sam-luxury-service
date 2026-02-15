
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import { translations } from './translations';
import { Language } from './types';
import TrustIndicators from './components/TrustIndicators';
import AntwerpAuthority from './components/AntwerpAuthority';
import VehicleShowcase from './components/VehicleShowcase';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('nl');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32 lg:pb-0">
      <Header currentLang={lang} setLang={setLang} t={t.nav} />

      <main>
        <Hero t={t.hero} />

        <TrustIndicators />
        <AntwerpAuthority />

        <ScrollReveal>
          <Features t={t.features} />
        </ScrollReveal>

        <section id="services-section">
          <ServiceAreas t={t.serviceAreas} />
        </section>

        {/* Single Vehicle Showcase */}
        <VehicleShowcase t={t.fleet} />

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
