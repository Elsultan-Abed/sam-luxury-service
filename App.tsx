
import React, { useState, useRef } from 'react';
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
import FloatingCTA from './components/FloatingCTA';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('nl');
  const t = translations[lang];

  // Ref for the Hero section to control FloatingCTA visibility
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32 lg:pb-0">
      <Header currentLang={lang} setLang={setLang} t={t.nav} />

      <main>
        {/* Pass ref to Hero */}
        <Hero ref={heroRef} t={t.hero} />

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

      {/* Smart Floating CTA (Mobile & Desktop) - Pass heroRef */}
      <FloatingCTA t={t.hero} heroRef={heroRef} />
    </div>
  );
};

export default App;
