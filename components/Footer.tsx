
import React from 'react';

interface FooterProps {
  t: {
    quote: string;
    services: string;
    headquarters: string;
    directLine: string;
    officialInquiries: string;
    copyright: string;
  };
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer
      id="contact"
      aria-label="Footer — Contact & Services"
      className="bg-black text-white py-48 border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 lg:gap-40">

          {/* Brand + Quote */}
          <div className="col-span-1 md:col-span-2 space-y-12">
            <div className="flex items-center">
              <a href="/" aria-label="SAM Luxury Service — Homepage">
                <img
                  src="/assets/logo.png"
                  alt="SAM Luxury Service — Privé Chauffeur Antwerpen"
                  className="h-24 w-auto object-contain grayscale brightness-[10] mix-blend-screen"
                  width="160"
                  height="96"
                  loading="lazy"
                />
              </a>
            </div>
            <p className="text-white/30 max-w-sm font-light leading-relaxed text-sm italic">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>

          {/* Services Links */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">
              {t.services}
            </h4>
            <ul className="space-y-6 text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Business Chauffeur
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Port of Antwerp
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  VIP Reservation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* NAP — Name, Address, Phone (semantic for Local SEO) */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">
              {t.headquarters}
            </h4>
            <address className="not-italic space-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
                  {t.directLine}
                </span>
                <a
                  href="tel:+32478617101"
                  className="text-xl text-white font-serif-display italic hover:text-[#D4AF37] transition-colors"
                  aria-label="Call SAM Luxury Service"
                >
                  +32 478 61 71 01
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
                  {t.officialInquiries}
                </span>
                {/* Email obfuscated to prevent spam harvesting */}
                <a
                  href={`mailto:${'info'}@${'samluxuryservice'}.be`}
                  className="text-sm font-light text-white/60 hover:text-white transition-colors"
                  aria-label="Email SAM Luxury Service"
                >
                  {'info'}&#64;{'samluxuryservice'}.be
                </a>
              </div>
              {/* WhatsApp */}
              <div>
                <a
                  href="https://wa.me/32478617101"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#25D366] transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="WhatsApp SAM Luxury Service"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} SAM Luxury Service. {t.copyright}.
          </p>
          <div className="flex items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
            <span>Antwerp, Belgium</span>
            <span aria-hidden="true">·</span>
            <span>samluxuryservice.be</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
