
import { Translations } from './types';

export const translations: Record<string, Translations> = {
  nl: {
    nav: {
      home: "Home",
      services: "De Vloot",
      booking: "Reserveren",
      contact: "Contact"
    },
    hero: {
      title: "SAM Luxury Service: De Elite van Antwerpen",
      subtitle: "U verdient niets minder dan absolute perfectie. Onze Mercedes-Benz V-Klasse vloot staat symbool voor prestige, comfort en discretie.",
      ctaPhone: "Direct contact: +32 478 61 71 01",
      ctaWhatsApp: "Bestel uw Chauffeur"
    },
    booking: {
      title: "Exclusieve Reservering",
      pickup: "Ophaaladres",
      dropoff: "Bestemming",
      date: "Datum",
      time: "Uur",
      passengers: "Gezelschap",
      submit: "Bevestig Uw Reis",
      success: "Uw verzoek is ontvangen. Uw persoonlijke chauffeur bevestigt binnen enkele ogenblikken."
    },
    features: {
      fast: { title: "Onberispelijke Punctualiteit", desc: "Tijd is ons kostbaarste goed. Wij garanderen een feilloze timing voor elke afspraak." },
      fair: { title: "V-Klasse Excellence", desc: "Ervaar de ultieme luxe van een privélounge op wielen. Leder, rust en een vlekkeloze service." },
      local: { title: "Uw Gids in Antwerpen", desc: "Van de haven tot de diamantwijk, wij kennen de stad en haar geheimen als geen ander." }
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "The Fleet",
      booking: "Reservation",
      contact: "Contact"
    },
    hero: {
      title: "SAM Luxury Service: Antwerp's Elite Chauffeur",
      subtitle: "Redefining the standard of premium travel. Step into our world-class Mercedes-Benz fleet for a journey beyond expectations.",
      ctaPhone: "Call Direct: +32 478 61 71 01",
      ctaWhatsApp: "Secure Your Chauffeur"
    },
    booking: {
      title: "Secure Your Journey",
      pickup: "Pickup Location",
      dropoff: "Final Destination",
      date: "Preferred Date",
      time: "Pickup Time",
      passengers: "Group Size",
      submit: "Confirm Reservation",
      success: "Reservation request sent. Your elite chauffeur will confirm your journey shortly."
    },
    features: {
      fast: { title: "Infallible Punctuality", desc: "Every second counts in prestige travel. We ensure arrival with surgical precision for all departures." },
      fair: { title: "Mercedes-Benz Protocol", desc: "The V-Class is not just a car; it's a mobile sanctuary of leather, luxury, and silent performance." },
      local: { title: "City Ambassadors", desc: "From the Port of Antwerp to the Royal Museum, we navigate the city with unparalleled local mastery." }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "La Flotte",
      booking: "Réservation",
      contact: "Contact"
    },
    hero: {
      title: "SAM Luxury Service: L'Élite d'Anvers",
      subtitle: "L'excellence à chaque kilomètre. Voyagez dans le confort absolu de notre flotte Mercedes-Benz et vivez l'exceptionnel.",
      ctaPhone: "Contact Direct: +32 478 61 71 01",
      ctaWhatsApp: "Réserver Votre Chauffeur"
    },
    booking: {
      title: "Réservation Exclusive",
      pickup: "Lieu de Prise en Charge",
      dropoff: "Destination Finale",
      date: "Date du Trajet",
      time: "Heure de Départ",
      passengers: "Nombre de Passagers",
      submit: "Confirmer la Réservation",
      success: "Demande envoyée. Votre chauffeur personnel confirmera votre trajet d'ici quelques instants."
    },
    features: {
      fast: { title: "Ponctualité Absolue", desc: "Votre temps est sacré. Nous garantissons une précision sans faille pour tous vos déplacements d'affaires." },
      fair: { title: "Excellence Classe V", desc: "Découvrez le summum du luxe automobile. Un sanctuaire de cuir et de sérénité pour vos trajets." },
      local: { title: "Experts de la Ville", desc: "Du port aux quartiers historiques, nous maîtrisons Anvers pour vous offrir le meilleur itinéraire." }
    }
  }
};
