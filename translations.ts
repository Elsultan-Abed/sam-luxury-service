
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
      title: "SAM Luxury Service: De Elite van België",
      subtitle: "U verdient niets minder dan absolute perfectie. Onze Mercedes-Benz V-Klasse vloot staat symbool voor prestige, comfort en discretie doorheen heel België.",
      ctaPhone: "Direct contact: +32 478 61 71 01",
      ctaWhatsApp: "Bestel uw Chauffeur"
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
      passengers: "Gezelschap",
      sedan: "1-4 Gasten (Sedan)",
      vclass: "5-7 Gasten (V-Klasse)",
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
      interiorLabel: "Executive Cabin",
      features: [
        'High-speed Onboard Connectiviteit',
        'Gekoelde Verfrissingen & Comfort',
        'Discrete, Meertalige Professional Chauffeurs'
      ]
    },
    serviceAreas: {
      badge: "Reikwijdte",
      title: "Doorheen België & Verder",
      sections: {
        airports: "Luchthavenvervoer",
        cities: "Grote Steden",
        crossBorder: "Grensoverschrijdend"
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
      title: "SAM Luxury Service: Belgium's Elite Chauffeur",
      subtitle: "Redefining the standard of premium travel. Step into our world-class Mercedes-Benz fleet for a journey beyond expectations across Belgium.",
      ctaPhone: "Call Direct: +32 478 61 71 01",
      ctaWhatsApp: "Secure Your Chauffeur"
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
      sedan: "1-4 Guests (Sedan)",
      vclass: "5-7 Guests (V-Class)",
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
      interiorLabel: "Executive Cabin",
      features: [
        'High-speed Onboard Connectivity',
        'Chilled Refreshments & Fine Comforts',
        'Discreet, Multilingual Professional Chauffeurs'
      ]
    },
    serviceAreas: {
      badge: "Service Reach",
      title: "Across Belgium & Beyond",
      sections: {
        airports: "Airport Transfers",
        cities: "Major Cities",
        crossBorder: "Cross Border"
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
      title: "SAM Luxury Service: L'Élite de Belgique",
      subtitle: "L'excellence à chaque kilomètre. Voyagez dans le confort absolu de notre flotte Mercedes-Benz à travers toute la Belgique.",
      ctaPhone: "Contact Direct: +32 478 61 71 01",
      ctaWhatsApp: "Réserver Votre Chauffeur"
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
      sedan: "1-4 Invités (Berline)",
      vclass: "5-7 Invités (Classe V)",
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
      interiorLabel: "Cabine Exécutive",
      features: [
        'Connectivité Bord Haute Vitesse',
        'Rafraîchissements et Confort',
        'Chauffeurs Professionnels Discrets et Polyglottes'
      ]
    },
    serviceAreas: {
      badge: "Portée du Service",
      title: "Partout en Belgique et Au-delà",
      sections: {
        airports: "Transferts Aéroport",
        cities: "Grandes Villes",
        crossBorder: "Transfrontalier"
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
      title: "SAM Luxury Service: La Élite de Bélgica",
      subtitle: "Usted merece nada menos que la perfección absoluta. Nuestra flota Mercedes-Benz Clase V ofrece prestigio y discreción en toda Bélgica.",
      ctaPhone: "Contacto Directo: +32 478 61 71 01",
      ctaWhatsApp: "Reserve su Chófer"
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
      passengers: "Pasajeros",
      sedan: "1-4 Invitados (Sedán)",
      vclass: "5-7 Invitados (Clase V)",
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
      interiorLabel: "Cabina Ejecutiva",
      features: [
        'Conectividad a Bordo de Alta Velocidad',
        'Refrescos y Máximo Confort',
        'Chóferes Profesionales Discretos y Multilingües'
      ]
    },
    serviceAreas: {
      badge: "Alcance del Servicio",
      title: "En toda Bélgica y más allá",
      sections: {
        airports: "Traslados al Aeropuerto",
        cities: "Principales Ciudades",
        crossBorder: "Transfronterizo"
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
