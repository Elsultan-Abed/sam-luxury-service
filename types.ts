
export type Language = 'nl' | 'en' | 'fr' | 'es';

export interface Translations {
  nav: {
    home: string;
    services: string;
    booking: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPhone: string;
    ctaWhatsApp: string;
  };
  booking: {
    badge: string;
    title: string;
    pickup: string;
    pickupPlaceholder: string;
    dropoff: string;
    dropoffPlaceholder: string;
    date: string;
    time: string;
    submit: string;
    success: string;
    passengers: string;
    sedan: string;
    vclass: string;
    secured: string;
    verified: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    vclassSuffix: string;
    fast: { title: string; desc: string };
    fair: { title: string; desc: string };
    local: { title: string; desc: string };
  };
  fleet: {
    badge: string;
    title: string;
    description: string;
    exteriorLabel: string;
    interiorLabel: string;
    features: string[];
  };
  serviceAreas: {
    badge: string;
    title: string;
    sections: {
      airports: string;
      cities: string;
      crossBorder: string;
    };
  };
  footer: {
    quote: string;
    services: string;
    headquarters: string;
    directLine: string;
    officialInquiries: string;
    copyright: string;
  };
}

export interface BookingFormData {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  name: string;
  phone: string;
}
