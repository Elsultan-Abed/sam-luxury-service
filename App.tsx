
import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import SEOManager from './components/SEOManager';
import SchemaMarkup, { FAQ_DATA } from './components/SchemaMarkup';
import FAQSection from './components/FAQSection';

const VALID_LANGS: Language[] = ['nl', 'fr', 'en', 'es', 'ar'];

const App: React.FC = () => {
  const { lang: routeLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  // Resolve active language from URL param (fallback to 'nl')
  const activeLang: Language = VALID_LANGS.includes(routeLang as Language)
    ? (routeLang as Language)
    : 'nl';

  const [lang, setLang] = useState<Language>(activeLang);
  const t = translations[lang];

  // Ref for the Hero section to control FloatingCTA visibility
  const heroRef = useRef<HTMLElement>(null);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    navigate(`/${newLang}/`, { replace: true });
  };

  const isRTL = lang === 'ar';

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-32 lg:pb-0 ${isRTL ? 'font-arabic' : ''}`}
    >
      {/* SEO: Dynamic meta tags, hreflang, canonical */}
      <SEOManager lang={lang} />

      {/* SEO: JSON-LD Structured Data */}
      <SchemaMarkup lang={lang} />

      <Header currentLang={lang} setLang={handleSetLang} t={t.nav} />

      <main>
        {/* Pass ref to Hero */}
        <Hero ref={heroRef} t={t.hero} lang={lang} />

        <TrustIndicators />
        <AntwerpAuthority lang={lang} />

        <ScrollReveal>
          <Features t={t.features} />
        </ScrollReveal>

        <section id="services-section" aria-label="Services">
          <ServiceAreas t={t.serviceAreas} />
        </section>

        {/* Single Vehicle Showcase */}
        <VehicleShowcase t={t.fleet} />

        {/* FAQ Section — for FAQPage schema + search intent content */}
        <FAQSection faqs={FAQ_DATA[lang]} lang={lang} />

        {/* Global CTA / Booking Section */}
        <section id="booking" aria-label="Booking" className="py-24 lg:py-48 bg-black relative">
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
