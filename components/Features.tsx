
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FeaturesProps {
  t: {
    badge: string;
    title: string;
    subtitle: string;
    vclassSuffix: string;
    fast: { title: string; desc: string };
    fair: { title: string; desc: string };
    local: { title: string; desc: string };
  };
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section id="services" className="py-24 lg:py-48 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-32">
          {[
            { icon: 'fa-shield-halved', ...t.fast },
            { icon: 'fa-v', isV: true, ...t.fair },
            { icon: 'fa-compass', ...t.local }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={0.1 * idx} direction="up">
              <div className="group space-y-6 lg:space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative text-white/20 group-hover:text-white transition-colors text-3xl font-light">
                    {item.isV ? (
                      <div className="flex items-center gap-2">
                        <i className={`fas ${item.icon}`}></i>
                        <span className="text-[10px] font-black uppercase tracking-widest mt-2">{t.vclassSuffix}</span>
                      </div>
                    ) : (
                      <i className={`fas ${item.icon}`}></i>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.4em] group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <p className="text-white/30 font-light leading-relaxed text-sm group-hover:text-white/60 transition-colors">{item.desc}</p>
                </div>
                <div className="h-[1px] w-8 bg-white/10 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
