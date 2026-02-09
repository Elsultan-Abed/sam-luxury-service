
import React from 'react';

interface FeaturesProps {
  t: {
    fast: { title: string; desc: string };
    fair: { title: string; desc: string };
    local: { title: string; desc: string };
  };
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section id="services" className="py-48 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-32">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-6 block">The Standard of Antwerp</span>
            <h2 className="text-5xl lg:text-7xl font-serif-display italic text-white leading-none">Unrivaled Excellence.</h2>
          </div>
          <div className="lg:col-span-4 pb-4">
             <p className="text-white/40 text-sm font-light italic leading-relaxed">Defining the next generation of private travel through attention to detail and impeccable timing.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
          {[
            { icon: 'fa-shield-halved', ...t.fast },
            { icon: 'fa-v', isV: true, ...t.fair },
            { icon: 'fa-compass', ...t.local }
          ].map((item, idx) => (
            <div key={idx} className="group space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                <div className="relative text-white/20 group-hover:text-white transition-colors text-3xl font-light">
                   {item.isV ? (
                     <div className="flex items-center gap-2">
                        <i className={`fas ${item.icon}`}></i>
                        <span className="text-[10px] font-black uppercase tracking-widest mt-2">-CLASS</span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
