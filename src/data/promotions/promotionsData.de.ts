export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  validUntil: string;
  description: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  };
  additionalDetails?: string;
}

export interface PromotionsPageContent {
  title: string;
}

export const promotionsPageContent: PromotionsPageContent = {
  title: 'Angebote'
};

export const promotions: Promotion[] = [
  {
    id: 'early-bird-1',
    title: 'Frühbucher-Angebot',
    subtitle: 'Im Voraus buchen und sparen',
    discount: '20% RABATT',
    validUntil: 'Gültig bis 31. März 2024',
    description: 'Zusätzliche Angebotsdetails',
    buttonText: 'JETZT BUCHEN',
    image: {
      src: '/images/home/temple-kandy.jpg',
      alt: 'Malerische Aussicht auf Tempel und See'
    },
    additionalDetails: 'Buchen Sie Ihren Aufenthalt frühzeitig und erhalten Sie 20% Rabatt auf alle Zimmertypen. Angebot gilt für Buchungen, die mindestens 30 Tage im Voraus erfolgen. Je nach Verfügbarkeit.'
  },
  {
    id: 'early-bird-2',
    title: 'Langzeitaufenthalt-Angebot',
    subtitle: 'Länger bleiben, mehr sparen',
    discount: '25% RABATT',
    validUntil: 'Gültig bis 30. April 2024',
    description: 'Für Aufenthalte von 5 Nächten oder mehr',
    buttonText: 'JETZT BUCHEN',
    image: {
      src: '/images/home/garden.png',
      alt: 'Wunderschöne Gartenblicke mit traditioneller Architektur'
    },
    additionalDetails: 'Bleiben Sie 5 Nächte oder länger und erhalten Sie 25% Rabatt auf Ihre gesamte Buchung. Inklusive kostenlosem Frühstück und spätem Check-out.'
  }
];
