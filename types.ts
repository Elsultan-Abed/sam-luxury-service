
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
    title: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    submit: string;
    success: string;
    passengers: string;
  };
  features: {
    fast: { title: string; desc: string };
    fair: { title: string; desc: string };
    local: { title: string; desc: string };
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
