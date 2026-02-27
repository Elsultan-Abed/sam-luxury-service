
import React, { useEffect } from 'react';
import { Language } from '../types';

const BASE_URL = 'https://www.samluxuryservice.be';
const LOGO_URL = `${BASE_URL}/assets/logo.png`;
const PRIMARY_IMAGE_URL = `${BASE_URL}/assets/mercedes-v-class.png`;

const FAQ_DATA: Record<Language, { q: string; a: string }[]> = {
    nl: [
        {
            q: 'Hoe boek ik een privéchauffeur in Antwerpen?',
            a: 'Bel ons direct op +32 478 61 71 01, stuur een WhatsApp-bericht of gebruik ons online reserveringsformulier. We bevestigen uw rit binnen enkele minuten.',
        },
        {
            q: 'Hoeveel kost een transfer van Antwerpen naar Brussels Airport (Zaventem)?',
            a: 'Onze tarieven zijn transparant en worden vooraf bevestigd. Contacteer ons voor een gepersonaliseerde offerte op basis van uw reisdetails.',
        },
        {
            q: 'Is SAM Luxury Service 24/7 beschikbaar?',
            a: 'Ja. We zijn 7 dagen per week, 24 uur per dag beschikbaar voor luchthaventransfers, zakelijke ritten en privé-evenementen — ook in het weekend en op feestdagen.',
        },
        {
            q: 'Welke voertuigen gebruikt SAM Luxury Service?',
            a: 'We rijden uitsluitend met de Mercedes-Benz V-Klasse: de standaard van executive vervoer. Ons voertuig biedt tot 7 passagiers, volledig leder interieur, WiFi en een gekoelde drank.',
        },
        {
            q: 'Bedient u ook andere steden buiten Antwerpen?',
            a: 'Absoluut. We zijn actief in heel België en Europa: Brussel, Gent, Brugge, Luik, Charleroi, Amsterdam, Parijs en meer. Geen bestemming is te ver.',
        },
        {
            q: 'Is de chauffeur discreet en professioneel?',
            a: 'Onze chauffeurs zijn meertalig, strikt discreet en verplicht tot professionele kledingstandaard. Elke rit wordt met absolute vertrouwelijkheid behandeld.',
        },
    ],
    fr: [
        {
            q: 'Comment réserver un chauffeur privé à Anvers ?',
            a: 'Appelez-nous au +32 478 61 71 01, envoyez un message WhatsApp ou utilisez notre formulaire de réservation en ligne. Nous confirmons votre trajet en quelques minutes.',
        },
        {
            q: 'Quel est le tarif d\'un transfert d\'Anvers vers Brussels Airport (Zaventem) ?',
            a: 'Nos tarifs sont transparents et confirmés à l\'avance. Contactez-nous pour un devis personnalisé basé sur vos détails de voyage.',
        },
        {
            q: 'SAM Luxury Service est-il disponible 24h/24 ?',
            a: 'Oui. Nous sommes disponibles 7 jours sur 7, 24 heures sur 24 pour les transferts aéroport, les trajets professionnels et les événements privés — y compris week-ends et jours fériés.',
        },
        {
            q: 'Quels véhicules SAM Luxury Service utilise-t-il ?',
            a: 'Nous utilisons exclusivement la Mercedes-Benz Classe V, standard du transport exécutif. Notre véhicule accueille jusqu\'à 7 passagers avec intérieur cuir, WiFi et boissions fraîches.',
        },
        {
            q: 'Desservez-vous d\'autres villes en dehors d\'Anvers ?',
            a: 'Absolument. Nous opérons dans toute la Belgique et l\'Europe : Bruxelles, Gand, Bruges, Liège, Charleroi, Amsterdam, Paris et bien plus encore.',
        },
        {
            q: 'Le chauffeur est-il discret et professionnel ?',
            a: 'Nos chauffeurs sont multilingues, strictement discrets et astreints à un code vestimentaire professionnel. Chaque trajet est traité avec une absolue confidentialité.',
        },
    ],
    en: [
        {
            q: 'How do I book a private chauffeur in Antwerp?',
            a: 'Call us directly at +32 478 61 71 01, send a WhatsApp message, or use our online booking form. We confirm your journey within minutes.',
        },
        {
            q: 'How much does a transfer from Antwerp to Brussels Airport (Zaventem) cost?',
            a: 'Our rates are transparent and confirmed in advance. Contact us for a personalised quote based on your travel details.',
        },
        {
            q: 'Is SAM Luxury Service available 24/7?',
            a: 'Yes. We operate 7 days a week, 24 hours a day for airport transfers, business journeys, and private events — including weekends and public holidays.',
        },
        {
            q: 'What vehicles does SAM Luxury Service use?',
            a: 'We operate exclusively with the Mercedes-Benz V-Class, the pinnacle of executive transport. Our vehicle seats up to 7 passengers with full leather interior, WiFi, and chilled refreshments.',
        },
        {
            q: 'Do you serve cities outside Antwerp?',
            a: 'Absolutely. We operate across Belgium and Europe: Brussels, Ghent, Bruges, Liège, Charleroi, Amsterdam, Paris, and beyond. No destination is too far.',
        },
        {
            q: 'Are chauffeurs discreet and professional?',
            a: 'Our chauffeurs are multilingual, strictly discreet, and held to a professional dress standard. Every journey is handled with absolute confidentiality.',
        },
    ],
    es: [
        {
            q: '¿Cómo reservar un chófer privado en Amberes?',
            a: 'Llámenos al +32 478 61 71 01, envíe un mensaje de WhatsApp o use nuestro formulario de reserva online. Confirmamos su viaje en minutos.',
        },
        {
            q: '¿Cuánto cuesta un traslado de Amberes al Aeropuerto de Bruselas (Zaventem)?',
            a: 'Nuestras tarifas son transparentes y se confirman de antemano. Contáctenos para un presupuesto personalizado según los detalles de su viaje.',
        },
        {
            q: '¿Está disponible SAM Luxury Service las 24 horas?',
            a: 'Sí. Operamos los 7 días de la semana, las 24 horas del día para traslados al aeropuerto, viajes de negocios y eventos privados.',
        },
        {
            q: '¿Qué vehículos utiliza SAM Luxury Service?',
            a: 'Trabajamos exclusivamente con el Mercedes-Benz Clase V, el estándar del transporte ejecutivo. Hasta 7 pasajeros, interior de cuero, WiFi y bebidas frías.',
        },
        {
            q: '¿Prestan servicio en otras ciudades fuera de Amberes?',
            a: 'Absolutamente. Operamos en toda Bélgica y Europa: Bruselas, Gante, Brujas, Lieja, Charleroi, Ámsterdam, París y más.',
        },
        {
            q: '¿Son los chóferes discretos y profesionales?',
            a: 'Nuestros chóferes son multilingüe, estrictamente discretos y con código de vestimenta profesional. Cada viaje se trata con absoluta confidencialidad.',
        },
    ],
};

interface SchemaMarkupProps {
    lang: Language;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ lang }) => {
    useEffect(() => {
        const removeExisting = (id: string) => {
            const el = document.getElementById(id);
            if (el) el.remove();
        };

        const inject = (id: string, data: object) => {
            removeExisting(id);
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = id;
            script.textContent = JSON.stringify(data, null, 2);
            document.head.appendChild(script);
        };

        // 1. TaxiService + LocalBusiness
        inject('schema-taxi-service', {
            '@context': 'https://schema.org',
            '@type': ['TaxiService', 'LocalBusiness'],
            '@id': `${BASE_URL}/#business`,
            name: 'SAM Luxury Service',
            url: BASE_URL,
            logo: LOGO_URL,
            image: PRIMARY_IMAGE_URL,
            telephone: '+32478617101',
            email: 'info@samluxuryservice.be',
            priceRange: '€€€',
            description: 'Exclusive private chauffeur service based in Antwerp, Belgium. Mercedes-Benz V-Class executive transport for airport transfers, business travel, and private events across Belgium and Europe.',
            areaServed: [
                { '@type': 'City', name: 'Antwerp' },
                { '@type': 'City', name: 'Brussels' },
                { '@type': 'City', name: 'Ghent' },
                { '@type': 'City', name: 'Bruges' },
                { '@type': 'City', name: 'Liège' },
                { '@type': 'Country', name: 'Belgium' },
            ],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Antwerp',
                addressCountry: 'BE',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 51.2194,
                longitude: 4.4025,
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    opens: '00:00',
                    closes: '23:59',
                },
            ],
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    telephone: '+32478617101',
                    contactType: 'reservations',
                    availableLanguage: ['Dutch', 'French', 'English', 'Spanish'],
                },
            ],
            sameAs: [
                'https://wa.me/32478617101',
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Luxury Chauffeur Services',
                itemListElement: [
                    { '@type': 'Offer', name: 'Airport Transfer Antwerp — Brussels Airport (BRU)' },
                    { '@type': 'Offer', name: 'Airport Transfer Antwerp — Charleroi (CRL)' },
                    { '@type': 'Offer', name: 'Business Chauffeur Antwerp' },
                    { '@type': 'Offer', name: 'VIP Event Transport Antwerp' },
                    { '@type': 'Offer', name: 'Long-Distance Executive Transfer Belgium–Europe' },
                ],
            },
        });

        // 2. WebSite + Organization
        inject('schema-website', {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebSite',
                    '@id': `${BASE_URL}/#website`,
                    url: BASE_URL,
                    name: 'SAM Luxury Service',
                    description: 'Premium private chauffeur service in Antwerp, Belgium',
                    inLanguage: ['nl-BE', 'fr-BE', 'en', 'es'],
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: `${BASE_URL}/?s={search_term_string}`,
                        'query-input': 'required name=search_term_string',
                    },
                },
                {
                    '@type': 'Organization',
                    '@id': `${BASE_URL}/#organization`,
                    name: 'SAM Luxury Service',
                    url: BASE_URL,
                    logo: {
                        '@type': 'ImageObject',
                        url: LOGO_URL,
                    },
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+32478617101',
                        email: 'info@samluxuryservice.be',
                        contactType: 'customer service',
                    },
                    sameAs: ['https://wa.me/32478617101'],
                },
            ],
        });

        // 3. FAQPage (language-aware)
        const faqs = FAQ_DATA[lang];
        inject('schema-faq', {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: a,
                },
            })),
        });

        // 4. BreadcrumbList
        inject('schema-breadcrumb', {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: `${BASE_URL}/nl/`,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: `${BASE_URL}/nl/#services-grid`,
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Booking',
                    item: `${BASE_URL}/nl/#booking`,
                },
            ],
        });

        return () => {
            removeExisting('schema-taxi-service');
            removeExisting('schema-website');
            removeExisting('schema-faq');
            removeExisting('schema-breadcrumb');
        };
    }, [lang]);

    return null;
};

export { FAQ_DATA };
export default SchemaMarkup;
