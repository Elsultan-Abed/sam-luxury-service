
import React from 'react';

interface ServiceAreasProps {
    t: {
        badge: string;
        title: string;
        sections: {
            airports: string;
            cities: string;
            crossBorder: string;
        };
    };
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ t }) => {
    const areas = [
        {
            title: t.sections.airports,
            items: ['Zaventem (BRU)', 'Charleroi (CRL)', 'Brussels Airport', 'Antwerp Airport'],
            image: '/assets/brussels-airport-integrated.png',
            label: 'Brussels Airport (BRU)'
        },
        {
            title: t.sections.cities,
            items: ['Antwerp', 'Brussels', 'Ghent', 'Bruges', 'Liège', 'Namur'],
            image: '/assets/grand-place-integrated.png',
            label: 'Brussels Grand Place'
        },
        {
            title: t.sections.crossBorder,
            items: ['Paris (CDG)', 'Amsterdam (Schiphol)', 'Düsseldorf Airport'],
            image: '/assets/ghent-integrated.png',
            label: 'Historic Ghent'
        }
    ];

    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center mb-20">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37] mb-6 block">{t.badge}</span>
                <h2 className="text-4xl lg:text-7xl font-serif-display italic text-white">{t.title}</h2>
            </div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {areas.map((area, i) => (
                    <div key={i} className="group relative overflow-hidden border border-white/5 bg-[#0A0A0A] hover:border-[#D4AF37]/20 transition-all duration-700">
                        {/* Image Background for Card */}
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src={area.image}
                                alt={area.label}
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-6">
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-2 block">{area.label}</span>
                                    <h3 className="text-white font-black text-2xl uppercase tracking-widest leading-none">{area.title}</h3>
                                </div>

                                <ul className="space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                                    {area.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/60">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"></div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceAreas;
