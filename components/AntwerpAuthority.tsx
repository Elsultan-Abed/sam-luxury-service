
import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

const CONTENT: Record<Language, {
    badge: string;
    title: string;
    titleEmphasis: string;
    description: string;
    cta: string;
}> = {
    nl: {
        badge: 'Lokale Autoriteit',
        title: 'Premium Chauffeur\nGebaseerd in ',
        titleEmphasis: 'Antwerpen',
        description: 'Wij zijn gespecialiseerd in executive chauffeursdiensten vanuit Antwerpen naar alle grote steden in België en Europa. Zakelijk vervoer, luchthaventransfers of privé-evenementen: wij bieden een naadloze verbinding naar uw bestemming — altijd discreet, altijd op tijd.',
        cta: 'Reserveer uw transfer',
    },
    fr: {
        badge: 'Autorité Locale',
        title: 'Chauffeur Premium\nBasé à ',
        titleEmphasis: 'Anvers',
        description: 'Nous sommes spécialisés dans les services de chauffeur exécutif depuis Anvers vers toutes les grandes villes de Belgique et d\'Europe. Transport d\'affaires, transferts aéroport ou événements privés — nous assurons une connexion fluide vers votre destination, toujours discrets, toujours à l\'heure.',
        cta: 'Réserver votre transfert',
    },
    en: {
        badge: 'Local Authority',
        title: 'Premium Chauffeur\nBased in ',
        titleEmphasis: 'Antwerp',
        description: 'We specialise in executive chauffeur services from Antwerp to all major cities in Belgium and Europe. Business travel, airport transfers, or private events — we provide a seamless connection to your destination, always discreet, always on time.',
        cta: 'Reserve your transfer',
    },
    es: {
        badge: 'Autoridad Local',
        title: 'Chófer Premium\nCon sede en ',
        titleEmphasis: 'Amberes',
        description: 'Nos especializamos en servicios de chófer ejecutivo desde Amberes a las principales ciudades de Bélgica y Europa. Transporte de negocios, traslados al aeropuerto o eventos privados — siempre discretos, siempre puntuales.',
        cta: 'Reservar su traslado',
    },
};

const CITIES: Record<Language, string[]> = {
    nl: ['Brussel', 'Gent', 'Brugge', 'Luik', 'Charleroi', 'Amsterdam', 'Parijs', 'Düsseldorf'],
    fr: ['Bruxelles', 'Gand', 'Bruges', 'Liège', 'Charleroi', 'Amsterdam', 'Paris', 'Düsseldorf'],
    en: ['Brussels', 'Ghent', 'Bruges', 'Liège', 'Charleroi', 'Amsterdam', 'Paris', 'Düsseldorf'],
    es: ['Bruselas', 'Gante', 'Brujas', 'Lieja', 'Charleroi', 'Ámsterdam', 'París', 'Düsseldorf'],
};

interface AntwerpAuthorityProps {
    lang?: Language;
}

const AntwerpAuthority: React.FC<AntwerpAuthorityProps> = ({ lang = 'nl' }) => {
    const c = CONTENT[lang];
    const cities = CITIES[lang];

    return (
        <section
            id="local-service"
            aria-label="Local Service Area"
            className="py-24 px-8 bg-black relative overflow-hidden"
        >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 blur-3xl rounded-full translate-x-1/2" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            {c.badge}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight mb-6 whitespace-pre-line">
                            {c.title}<span className="italic text-white/50">{c.titleEmphasis}</span>
                        </h2>
                        <p className="text-white/70 text-lg font-light leading-relaxed">
                            {c.description}
                        </p>
                    </motion.div>

                    {/* City Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4" aria-label="Service areas">
                        {cities.map((city, index) => (
                            <motion.div
                                key={city}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" aria-hidden="true" />
                                <span className="text-white/80 font-light tracking-wide">{city}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Internal CTA */}
                    <a
                        href="#booking"
                        className="inline-flex items-center gap-3 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] hover:gap-5 transition-all duration-300 pt-2"
                    >
                        {c.cta}
                        <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
                    </a>
                </div>

                {/* Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 glass-morphism p-2">
                        <img
                            src="/assets/antwerp-luxury.jpg"
                            alt="Antwerp Central Station — SAM Luxury Service base in Antwerp, Belgium"
                            className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                            width="800"
                            height="600"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-1">HQ Location</p>
                            <p className="text-white text-2xl font-serif">Antwerp, Belgium</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AntwerpAuthority;
