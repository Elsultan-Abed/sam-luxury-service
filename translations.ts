
import { Translations, Language } from './types';

export const translations: Record<Language, Translations> = {
  nl: {
    nav: {
      home: "Home",
      services: "Services",
      booking: "Reservering",
      contact: "Contact"
    },
    hero: {
      ctaPhone: "Bel Nu",
      ctaWhatsApp: "Boek via WhatsApp",
      ctaReservation: "Reserveer Rit",
      slides: [
        {
          title: "Premium Chauffeur Service in Antwerpen",
          subtitle: "Exclusieve Mercedes V-Klasse Ervaring.",
          cta: "Meer Info"
        },
        {
          title: "Uw Privé Executive Transport",
          subtitle: "Discreet. Betrouwbaar. Uitzonderlijk.",
          cta: "Bekijk Interieur"
        },
        {
          title: "Luchthavenvervoer & Zakenreizen",
          subtitle: "Naadloze verbindingen met Brussels Airport & Schiphol.",
          cta: "Bekijk Tarieven"
        },
        {
          title: "Antwerpse Autoriteit",
          subtitle: "Thuisbasis in Antwerpen, service in heel Europa.",
          cta: "Over Ons"
        },
        {
          title: "Mobiel Kantoor",
          subtitle: "Maximale productiviteit onderweg.",
          cta: "Onze Vloot"
        },
        {
          title: "Service in Heel België",
          subtitle: "Van Brussel tot Brugge, in stijl.",
          cta: "Bestemmingen"
        }
      ]
    },
    booking: {
      badge: "Reisdetails",
      title: "Exclusieve Reservering",
      pickup: "Ophaaladres",
      pickupPlaceholder: "Waar kunnen we u ontmoeten?",
      dropoff: "Bestemming",
      dropoffPlaceholder: "Waar gaat de reis naartoe?",
      date: "Datum",
      time: "Uur",
      submit: "Bevestig Uw Reis",
      success: "Uw verzoek is ontvangen. Uw persoonlijke chauffeur bevestigt binnen enkele ogenblikken.",
      passengers: "Aantal Personen",
      oneGuest: "Persoon",
      multiGuests: "Personen",
      secured: "SSL Beveiligd",
      verified: "Geverifieerd"
    },
    features: {
      badge: "De Standaard van België",
      title: "Ongeëvenaarde Excellentie.",
      subtitle: "De nieuwe generatie privévervoer, gedefinieerd door aandacht voor detail en onberispelijke timing.",
      vclassSuffix: "-KLASSE",
      fast: { title: "Airport Transfers", desc: "Zaventem (BRU), Charleroi (CRL) of Parijs (CDG). Wij garanderen een feilloze timing." },
      fair: { title: "Nationale Dekking", desc: "Van Antwerpen en Brussel tot Gent en Brugge. Luxe transport in heel België." },
      local: { title: "V-Klasse Excellence", desc: "Ervaar de ultieme luxe van een privélounge op wielen. Leder, rust en vlekkeloze service." }
    },
    fleet: {
      badge: "De Ultieme Chauffeursauto",
      title: "Mercedes V-Klasse",
      description: "Meer dan een voertuig, het is uw privé-executive suite onderweg. Geherconfigureerd voor absolute privacy en comfort.",
      exteriorLabel: "Premium Exterieur",
      interior6Label: "6 Passagiers (Conference)",
      interior7Label: "7 Passagiers (Executive)",
      interiorLabel: "Executive Cabin",
      features: [
        'High-speed Onboard Connectiviteit',
        'Gekoelde Verfrissingen (Fridge & Cold Water)',
        'Discrete, Meertalige Professional Chauffeurs'
      ]
    },
    serviceAreas: {
      badge: "Reikwijdte",
      title: "Doorheen België & Verder",
      sections: {
        airports: "Luchthavenvervoer",
        business: "Zakelijk Chauffeur",
        private: "Privé Chauffeur",
        longDistance: "Internationaal"
      }
    },
    footer: {
      quote: "Wij zorgen voor een naadloze overgang tussen bestemmingen, gedefinieerd door stilte, comfort en ongeëvenaard professionalisme.",
      services: "Diensten",
      headquarters: "Hoofdkantoor",
      directLine: "Directe Lijn",
      officialInquiries: "Officiële Aanvragen",
      copyright: "Excellence in Motion"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      booking: "Reservation",
      contact: "Contact"
    },
    hero: {
      ctaPhone: "Call Now",
      ctaWhatsApp: "Book via WhatsApp",
      ctaReservation: "Request Reservation",
      slides: [
        {
          title: "Premium Chauffeur Service in Antwerp",
          subtitle: "Exclusive Mercedes V-Class Experience.",
          cta: "More Info"
        },
        {
          title: "Your Private Executive Transport",
          subtitle: "Discreet. Reliable. Exceptional.",
          cta: "View Interior"
        },
        {
          title: "Airport Transfers & Business Travel",
          subtitle: "Seamless connections to Brussels Airport & Schiphol.",
          cta: "View Rates"
        },
        {
          title: "Antwerp Authority",
          subtitle: "Based in Antwerp, serving all of Europe.",
          cta: "About Us"
        },
        {
          title: "Mobile Office",
          subtitle: "Maximum productivity on the move.",
          cta: "Our Fleet"
        },
        {
          title: "Serving All Belgium",
          subtitle: "From Brussels to Bruges, in style.",
          cta: "Destinations"
        }
      ]
    },
    booking: {
      badge: "Journey Details",
      title: "Secure Reservation",
      pickup: "Pickup Location",
      pickupPlaceholder: "Where should we meet you?",
      dropoff: "Final Destination",
      dropoffPlaceholder: "Where are you heading?",
      date: "Preferred Date",
      time: "Pickup Time",
      submit: "Confirm Reservation",
      success: "Reservation request sent. Your elite chauffeur will confirm your journey shortly.",
      passengers: "Group Size",
      oneGuest: "Guest",
      multiGuests: "Guests",
      secured: "SSL Secured",
      verified: "Verified"
    },
    features: {
      badge: "The Standard of Belgium",
      title: "Unrivaled Excellence.",
      subtitle: "Defining the next generation of private travel through attention to detail and impeccable timing.",
      vclassSuffix: "-CLASS",
      fast: { title: "Airport Transfers", desc: "Premium transfers to Zaventem (BRU), Charleroi (CRL), and Paris (CDG) with surgical precision." },
      fair: { title: "National Coverage", desc: "From Brussels to Bruges, we provide high-end chauffeur services across all major Belgian cities." },
      local: { title: "Mercedes-Benz Protocol", desc: "The V-Class is not just a car; it's a mobile sanctuary of leather, luxury, and silent performance." }
    },
    fleet: {
      badge: "The Ultimate Chauffeur Carriage",
      title: "Mercedes V-Class",
      description: "More than a vehicle, it is your private executive suite on the move. Reconfigured for absolute privacy and comfort.",
      exteriorLabel: "Premium Exterior",
      interior6Label: "6 Seats (Conference)",
      interior7Label: "7 Seats (Executive)",
      interiorLabel: "Executive Cabin",
      features: [
        'High-speed Onboard Connectivity',
        'Fridge with Cold Water included',
        'Discreet, Multilingual Professional Chauffeurs'
      ]
    },
    serviceAreas: {
      badge: "Service Reach",
      title: "Across Belgium & Beyond",
      sections: {
        airports: "Airport Transfers",
        business: "Business Chauffeur",
        private: "Private Chauffeur",
        longDistance: "Long Distance"
      }
    },
    footer: {
      quote: "We provide a seamless transition between destinations, defined by silence, comfort, and unmatched professionalism.",
      services: "Services",
      headquarters: "Headquarters",
      directLine: "Direct Line",
      officialInquiries: "Official Inquiries",
      copyright: "Excellence in Motion"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      booking: "Réservation",
      contact: "Contact"
    },
    hero: {
      ctaPhone: "Appeler",
      ctaWhatsApp: "Réserver par WhatsApp",
      ctaReservation: "Demande de Réservation",
      slides: [
        {
          title: "Service de Chauffeur Premium à Anvers",
          subtitle: "Expérience exclusive en Mercedes Classe V.",
          cta: "Plus d'infos"
        },
        {
          title: "Votre Transport Exécutif Privé",
          subtitle: "Discret. Fiable. Exceptionnel.",
          cta: "Voir l'intérieur"
        },
        {
          title: "Transferts Aéroport & Voyage d'Affaires",
          subtitle: "Connexions fluides vers Bruxelles-National & Schiphol.",
          cta: "Voir les tarifs"
        },
        {
          title: "L'Autorité Anversoise",
          subtitle: "Basé à Anvers, desservant toute l'Europe.",
          cta: "À propos"
        },
        {
          title: "Bureau Mobile",
          subtitle: "Productivité maximale en déplacement.",
          cta: "Notre Flotte"
        },
        {
          title: "Service dans toute la Belgique",
          subtitle: "De Bruxelles à Bruges, avec style.",
          cta: "Destinations"
        }
      ]
    },
    booking: {
      badge: "Détails du Voyage",
      title: "Réservation Sécurisée",
      pickup: "Lieu de Prise en Charge",
      pickupPlaceholder: "Où devons-nous vous rencontrer ?",
      dropoff: "Destination Finale",
      dropoffPlaceholder: "Où allez-vous ?",
      date: "Date du Trajet",
      time: "Heure de Départ",
      submit: "Confirmer la Réservation",
      success: "Demande envoyée. Votre chauffeur personnel confirmera votre trajet d'ici quelques instants.",
      passengers: "Nombre de Passagers",
      oneGuest: "Passager",
      multiGuests: "Passagers",
      secured: "SSL Sécurisé",
      verified: "Vérifié"
    },
    features: {
      badge: "Le Standard de Belgique",
      title: "Excellence Inégalée.",
      subtitle: "Définir la prochaine génération de voyages privés par l'attention portée aux détails et un timing impeccable.",
      vclassSuffix: "-CLASSE",
      fast: { title: "Transferts Aéroport", desc: "Zaventem (BRU), Charleroi (CRL) ou Paris (CDG). Nous garantissons une ponctualité sans faille." },
      fair: { title: "Couverture Nationale", desc: "De Bruxelles à Bruges en passant par Anvers, nous assurons vos trajets de prestige partout en Belgique." },
      local: { title: "Protocole Mercedes", desc: "La Classe V n'est pas seulement une voiture ; c'est un sanctuaire mobile de cuir et de luxe." }
    },
    fleet: {
      badge: "Le Carrosse Ultime",
      title: "Mercedes Classe V",
      description: "Plus qu'un véhicule, c'est votre suite exécutive privée en mouvement. Reconfigurée pour une intimité et un confort absolus.",
      exteriorLabel: "Extérieur Premium",
      interior6Label: "6 Places (Conférence)",
      interior7Label: "7 Places (Exécutif)",
      interiorLabel: "Cabine Exécutive",
      features: [
        'Connectivité Bord Haute Vitesse',
        'Réfrigérateur avec Eau Fraîche incluse',
        'Chauffeurs Professionnels Discrets et Polyglottes'
      ]
    },
    serviceAreas: {
      badge: "Portée du Service",
      title: "Partout en Belgique et Au-delà",
      sections: {
        airports: "Transferts Aéroport",
        business: "Chauffeur d'Affaires",
        private: "Chauffeur Privé",
        longDistance: "Longue Distance"
      }
    },
    footer: {
      quote: "Nous assurons une transition fluide entre les destinations, définie par le silence, le confort et un professionnalisme inégalé.",
      services: "Services",
      headquarters: "Siège Social",
      directLine: "Ligne Directe",
      officialInquiries: "Demandes Officielles",
      copyright: "Excellence en Mouvement"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      booking: "Reservas",
      contact: "Contacto"
    },
    hero: {
      ctaPhone: "Llamar Ahora",
      ctaWhatsApp: "Reservar por WhatsApp",
      ctaReservation: "Solicitar Reserva",
      slides: [
        {
          title: "Servicio de Chófer Premium en Amberes",
          subtitle: "Experiencia exclusiva en Mercedes Clase V.",
          cta: "Más info"
        },
        {
          title: "Su Transporte Ejecutivo Privado",
          subtitle: "Discreto. Fiable. Excepcional.",
          cta: "Ver interior"
        },
        {
          title: "Traslados al Aeropuerto y Viajes de Negocios",
          subtitle: "Conexiones fluidas con el Aeropuerto de Bruselas y Schiphol.",
          cta: "Ver tarifas"
        },
        {
          title: "Autoridad en Amberes",
          subtitle: "Con sede en Amberes, sirviendo a toda Europa.",
          cta: "Sobre nosotros"
        },
        {
          title: "Oficina Móvil",
          subtitle: "Máxima productividad en movimiento.",
          cta: "Nuestra Flota"
        },
        {
          title: "Servicio en toda Bélgica",
          subtitle: "De Bruselas a Brujas, con estilo.",
          cta: "Destinos"
        }
      ]
    },
    booking: {
      badge: "Detalles del Viaje",
      title: "Reserva Segura",
      pickup: "Recogida",
      pickupPlaceholder: "¿Dónde debemos recogerle?",
      dropoff: "Destino Final",
      dropoffPlaceholder: "¿A dónde se dirige?",
      date: "Fecha",
      time: "Hora",
      submit: "Confirmar Reserva",
      success: "Solicitud recibida. Su chófer personal confirmará su viaje en breve.",
      passengers: "Número de Pasajeros",
      oneGuest: "Pasajero",
      multiGuests: "Pasajeros",
      secured: "SSL Seguro",
      verified: "Verificado"
    },
    features: {
      badge: "El Estándar de Bélgica",
      title: "Excelencia Incomparable.",
      subtitle: "Definiendo la próxima generación de viajes privados a través de la atención al detalle y la puntualidad.",
      vclassSuffix: "-CLASE",
      fast: { title: "Traslados al Aeropuerto", desc: "Zaventem (BRU), Charleroi (CRL) o París (CDG). Garantizamos puntualidad absoluta." },
      fair: { title: "Cobertura Nacional", desc: "De Bruselas a Brujas, pasando por Amberes, ofrecemos servicios premium en toda Bélgica." },
      local: { title: "Protocolo Mercedes", desc: "La Clase V no es solo un coche; es un santuario móvil de cuero, lujo y silencio." }
    },
    fleet: {
      badge: "El Carruaje de Chófer Definitivo",
      title: "Mercedes Clase V",
      description: "Más que un vehículo, es su suite ejecutiva privada en movimiento. Reconfigurada para total privacidad y confort.",
      exteriorLabel: "Exterior Premium",
      interior6Label: "6 Plazas (Conferencia)",
      interior7Label: "7 Plazas (Ejecutivo)",
      interiorLabel: "Cabina Ejecutiva",
      features: [
        'Conectividad a Bordo de Alta Velocidad',
        'Nevera con Agua Fría incluida',
        'Chóferes Profesionales Discretos y Multilingües'
      ]
    },
    serviceAreas: {
      badge: "Alcance del Servicio",
      title: "En toda Bélgica y más allá",
      sections: {
        airports: "Traslados al Aeropuerto",
        business: "Chófer de Negocios",
        private: "Chófer Privado",
        longDistance: "Larga Distancia"
      }
    },
    footer: {
      quote: "Proporcionamos una transición sin fisuras entre destinos, definida por el silencio, el confort y un profesionalismo inigualable.",
      services: "Servicios",
      headquarters: "Sede Central",
      directLine: "Línea Directa",
      officialInquiries: "Consultas Oficiales",
      copyright: "Excelencia en Movimiento"
    }
  }
};
