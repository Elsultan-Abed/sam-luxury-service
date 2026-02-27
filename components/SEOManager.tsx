
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
        title: 'SAM Luxury | Premium Chauffeur Service Antwerpen',
        // NL — 235 chars
        description: 'Premium privéchauffeur in Antwerpen & heel België. Mercedes V-Klasse, 24/7 beschikbaar voor zakelijk en privévervoer. Luchthaventransfer Zaventem, Charleroi & Brussel. Discreet, punctueel. Boek nu.',
        keywords: 'taxi antwerpen, chauffeur antwerpen, premium chauffeur antwerpen, privéchauffeur service antwerpen, luchthavenvervoer zaventem, mercedes v klasse antwerpen, zakelijk vervoer antwerpen',
    },
    fr: {
        htmlLang: 'fr-BE',
        ogLocale: 'fr_BE',
        title: 'SAM Luxury | Chauffeur Premium Anvers — Service 24h',
        // FR — 232 chars
        description: 'Service de chauffeur premium à Anvers et toute la Belgique. Mercedes Classe V, disponible 24h/24. Transfert aéroport Zaventem & Charleroi pour déplacements pro et privés. Discret, ponctuel. Réservez.',
        keywords: 'taxi anvers, chauffeur premium anvers, service chauffeur anvers, transfert aéroport anvers, mercedes classe v anvers, transport affaires anvers, taxi luxe anvers',
    },
    en: {
        htmlLang: 'en',
        ogLocale: 'en_GB',
        title: 'SAM Luxury | Premium Chauffeur Service Antwerp',
        // EN — 231 chars
        description: 'Premium private chauffeur in Antwerp & across Belgium. Mercedes V-Class, available 24/7 for business and private travel. Airport transfers to Zaventem, Charleroi & Brussels. Discreet. Book via WhatsApp.',
        keywords: 'taxi antwerp, premium chauffeur antwerp, private chauffeur service antwerp, airport transfer antwerp, brussels airport zaventem, mercedes v class antwerp, business chauffeur antwerp',
    },
    es: {
        htmlLang: 'es',
        ogLocale: 'es_ES',
        title: 'SAM Luxury | Chófer Premium Amberes — Servicio 24h',
        // ES — 231 chars
        description: 'Chófer premium en Amberes y toda Bélgica. Mercedes Clase V disponible 24/7 para viajes de negocios y privados. Traslados al aeropuerto Zaventem, Charleroi y Bruselas. Discreto, puntual. Reserve ya.',
        keywords: 'taxi amberes, chófer premium amberes, servicio chófer amberes, traslado aeropuerto zaventem, mercedes clase v amberes, transporte ejecutivo premium amberes',
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
