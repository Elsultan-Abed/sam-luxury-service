
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
        { title: t.sections.airports, items: ['Zaventem (BRU)', 'Charleroi (CRL)', 'Brussels Airport', 'Antwerp Airport'] },
        { title: t.sections.cities, items: ['Antwerp', 'Brussels', 'Ghent', 'Bruges', 'Liège', 'Namur'] },
        { title: t.sections.crossBorder, items: ['Paris (CDG)', 'Amsterdam (Schiphol)', 'Düsseldorf Airport'] }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">{t.badge}</span>
                    <h2 className="text-4xl lg:text-6xl font-serif-display italic text-white mt-4">{t.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {areas.map((area, i) => (
                        <div key={i} className="p-8 border border-white/5 glass-morphism hover:border-[#D4AF37]/20 transition-all duration-500">
                            <h3 className="text-[#D4AF37] font-black text-xs uppercase tracking-widest mb-6">{area.title}</h3>
                            <ul className="space-y-4">
                                {area.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-default">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"></div>
                                        <span className="text-[11px] font-bold uppercase tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
