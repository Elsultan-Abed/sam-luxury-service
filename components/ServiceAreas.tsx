
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Translations } from '../types';

interface ServiceAreasProps {
    t: Translations['serviceAreas'];
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ t }) => {
    const areas = [
        {
            title: t.sections.airports,
            items: ['Zaventem (BRU)', 'Charleroi (CRL)', 'Paris (CDG)', 'Schiphol (AMS)'],
            image: '/assets/brussels-airport-branded.png',
            label: 'Global Connections'
        },
        {
            title: t.sections.business,
            items: ['Corporate Events', 'Roadshows', 'Financial District', 'Diplomatic'],
            image: '/assets/mercedes-v-class-interior-6.png',
            label: 'Executive Travel'
        },
        {
            title: t.sections.private,
            items: ['Fine Dining', 'Luxury Shopping', 'Private Events', 'Weddings'],
            image: '/assets/antwerp-luxury.png', // Changed from grand-place for variety
            label: 'Lifestyle Management'
        },
        {
            title: t.sections.longDistance,
            items: ['Antwerp', 'Paris', 'Amsterdam', 'Luxembourg'],
            image: '/assets/mercedes-v-class-exterior.png',
            label: 'European Reach'
        }
    ];

    return (
        <section id="services-grid" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Subtle background texture/gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/50 via-black to-black opacity-50"></div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <ScrollReveal>
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">{t.badge}</span>
                        <h2 className="text-4xl lg:text-6xl font-serif-display text-white mb-6 leading-tight">{t.title}</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto opacity-50"></div>
                    </ScrollReveal>
                </div>

                {/* 4-Pillar Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {areas.map((area, i) => (
                        <ScrollReveal key={i} delay={0.1 * i} direction="up" className="h-full">
                            <div className="group relative h-[400px] lg:h-[500px] overflow-hidden rounded-sm border border-white/10 bg-[#0A0A0A] hover:border-[#D4AF37]/50 transition-all duration-700">

                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={area.image}
                                        alt={`${area.title} — SAM Luxury Service Antwerp`}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 transform-gpu"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-700"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-3 block opacity-80">{area.label}</span>
                                        <h3 className="text-white font-serif text-2xl leading-none mb-6">{area.title}</h3>

                                        {/* Divider */}
                                        <div className="w-12 h-[1px] bg-white/30 mb-6 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-700"></div>

                                        <ul className="space-y-2">
                                            {area.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" style={{ transitionDelay: `${j * 50}ms` }}>
                                                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
