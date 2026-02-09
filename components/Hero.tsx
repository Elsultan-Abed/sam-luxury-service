
import React from 'react';

interface HeroProps {
  t: {
    title: string;
    subtitle: string;
    ctaPhone: string;
    ctaWhatsApp: string;
  };
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24">
      {/* Background Lighting Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-[#D4AF37]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Decorative Star pattern simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-4xl space-y-12">
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="h-[1px] w-16 bg-[#D4AF37]"></div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.6em] text-[#D4AF37]">Premium Antwerp Chauffeur</span>
          </div>

          <h1 className="text-6xl lg:text-9xl font-serif-display text-white leading-[0.95] tracking-tight">
            <span className="block italic font-light opacity-80 mb-2">Excellence in</span>
            <span className="block font-black text-gradient-silver">Motion.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/50 leading-relaxed max-w-2xl font-light italic">
            "{t.subtitle}"
          </p>

          <div className="hidden sm:flex flex-col sm:flex-row gap-6 pt-6">
            <a
              href="tel:+32478617101"
              className="btn-luxury flex items-center justify-center gap-4 bg-white text-black font-extrabold py-6 px-12 text-[12px] uppercase tracking-[0.4em] shadow-2xl hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              <i className="fas fa-phone-alt"></i>
              {t.ctaPhone}
            </a>

            <a
              href="https://wa.me/32478617101"
              className="btn-luxury flex items-center justify-center gap-4 bg-transparent text-white border border-white/20 font-extrabold py-6 px-12 text-[12px] uppercase tracking-[0.4em] backdrop-blur-sm hover:bg-white/5 transition-colors"
            >
              <i className="fab fa-whatsapp"></i>
              {t.ctaWhatsApp}
            </a>
          </div>
        </div>
      </div>

      {/* Hero Badge */}
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 px-6 py-4 border border-white/10 glass-morphism">
        <div className="text-[#D4AF37]">
          <i className="fas fa-award text-3xl"></i>
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/80">Certified Quality</p>
          <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Mercedes-Benz Partner</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
