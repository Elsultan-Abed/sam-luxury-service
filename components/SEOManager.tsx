
import React, { useEffect } from 'react';
import { Language } from '../types';

const BASE_URL = 'https://www.samluxuryservice.be';

const SEO_DATA: Record<Language, {
    htmlLang: string;
    ogLocale: string;
    title: string;
    description: string;
    keywords: string;
}> = {
    nl: {
        htmlLang: 'nl-BE',
        ogLocale: 'nl_BE',
        title: 'SAM Luxury Service | Privé Chauffeur & Taxi Antwerpen — Mercedes V-Klasse',
        description: 'Exclusieve privéchauffeur en luchthaventransfer in Antwerpen. Mercedes V-Klasse, 24/7 beschikbaar. Zaventem, Charleroi, Brussel & heel België. Boek direct via WhatsApp.',
        keywords: 'taxi antwerpen, chauffeur antwerpen, privéchauffeur antwerpen, luchthavenvervoer antwerpen, zaventem transfer, mercedes v klasse antwerpen, zakelijk vervoer antwerpen, luxe taxi antwerpen',
    },
    fr: {
        htmlLang: 'fr-BE',
        ogLocale: 'fr_BE',
        title: 'SAM Luxury Service | Chauffeur Privé & Taxi Anvers — Mercedes Classe V',
        description: 'Service de chauffeur privé et transfert aéroport à Anvers. Mercedes Classe V, disponible 24h/24. Zaventem, Charleroi, Bruxelles et toute la Belgique. Réservez via WhatsApp.',
        keywords: 'taxi anvers, chauffeur privé anvers, transfert aéroport anvers, mercedes classe v anvers, transport affaires anvers, taxi luxe anvers, chauffeur bruxelles',
    },
    en: {
        htmlLang: 'en',
        ogLocale: 'en_GB',
        title: 'SAM Luxury Service | Private Chauffeur & Taxi Antwerp — Mercedes V-Class',
        description: 'Exclusive private chauffeur and airport transfer service in Antwerp. Mercedes V-Class, available 24/7. Brussels Airport (BRU), Charleroi, Schiphol & all Belgium. Book via WhatsApp.',
        keywords: 'taxi antwerp, chauffeur antwerp, private chauffeur antwerp, airport transfer antwerp, brussels airport transfer, mercedes v class antwerp, business chauffeur antwerp, luxury taxi antwerp',
    },
    es: {
        htmlLang: 'es',
        ogLocale: 'es_ES',
        title: 'SAM Luxury Service | Chófer Privado y Taxi Amberes — Mercedes Clase V',
        description: 'Servicio exclusivo de chófer privado y traslado al aeropuerto en Amberes. Mercedes Clase V, disponible 24/7. Zaventem, Charleroi, Bruselas y toda Bélgica.',
        keywords: 'taxi amberes, chófer privado amberes, traslado aeropuerto amberes, mercedes clase v amberes, transporte ejecutivo amberes',
    },
};

const LANG_PATHS: Record<Language, string> = {
    nl: '/nl/',
    fr: '/fr/',
    en: '/en/',
    es: '/es/',
};

interface SEOManagerProps {
    lang: Language;
}

const SEOManager: React.FC<SEOManagerProps> = ({ lang }) => {
    useEffect(() => {
        const seo = SEO_DATA[lang];

        // Update html lang
        document.documentElement.lang = seo.htmlLang;

        // Title
        document.title = seo.title;

        // Helper to upsert a meta tag
        const setMeta = (selector: string, attr: string, value: string) => {
            let el = document.querySelector<HTMLMetaElement>(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('="');
                el.setAttribute(attrName, attrVal.replace('"', ''));
                document.head.appendChild(el);
            }
            el.setAttribute(attr, value);
        };

        // Helper to upsert a link tag
        const setLink = (rel: string, hreflang: string | null, href: string) => {
            const selector = hreflang
                ? `link[rel="${rel}"][hreflang="${hreflang}"]`
                : `link[rel="${rel}"]`;
            let el = document.querySelector<HTMLLinkElement>(selector);
            if (!el) {
                el = document.createElement('link');
                el.rel = rel;
                if (hreflang) el.setAttribute('hreflang', hreflang);
                document.head.appendChild(el);
            }
            el.href = href;
        };

        // Standard meta
        setMeta('meta[name="description"]', 'content', seo.description);
        setMeta('meta[name="keywords"]', 'content', seo.keywords);

        // Canonical
        setLink('canonical', null, `${BASE_URL}${LANG_PATHS[lang]}`);

        // Hreflang alternates
        const hrefLangs = [
            { hreflang: 'nl-BE', href: `${BASE_URL}/nl/` },
            { hreflang: 'fr-BE', href: `${BASE_URL}/fr/` },
            { hreflang: 'en', href: `${BASE_URL}/en/` },
            { hreflang: 'es', href: `${BASE_URL}/es/` },
            { hreflang: 'x-default', href: `${BASE_URL}/nl/` },
        ];
        hrefLangs.forEach(({ hreflang, href }) => setLink('alternate', hreflang, href));

        // Open Graph
        setMeta('meta[property="og:title"]', 'content', seo.title);
        setMeta('meta[property="og:description"]', 'content', seo.description);
        setMeta('meta[property="og:url"]', 'content', `${BASE_URL}${LANG_PATHS[lang]}`);
        setMeta('meta[property="og:locale"]', 'content', seo.ogLocale);

        // Twitter Card
        setMeta('meta[name="twitter:title"]', 'content', seo.title);
        setMeta('meta[name="twitter:description"]', 'content', seo.description);
    }, [lang]);

    return null;
};

export default SEOManager;
