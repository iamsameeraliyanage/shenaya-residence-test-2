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
  title: 'Promotions'
};

export const promotions: Promotion[] = [
  {
    id: 'early-bird-1',
    title: 'Early Bird Special',
    subtitle: 'Book in advance and save',
    discount: '20% OFF',
    validUntil: 'Valid until March 31st 2024',
    description: 'Additional Offer Details',
    buttonText: 'BOOK NOW',
    image: {
      src: '/images/home/temple-kandy.jpg',
      alt: 'Scenic view of temple and lake'
    },
    additionalDetails: 'Book your stay early and enjoy a 20% discount on all room types. Offer valid for bookings made at least 30 days in advance. Subject to availability.'
  },
  {
    id: 'early-bird-2',
    title: 'Extended Stay Special',
    subtitle: 'Stay longer, save more',
    discount: '25% OFF',
    validUntil: 'Valid until April 30th 2024',
    description: 'Additional Offer Details',
    buttonText: 'BOOK NOW',
    image: {
      src: '/images/home/garden.png',
      alt: 'Beautiful garden views with traditional architecture'
    },
    additionalDetails: 'Stay 5 nights or more and receive a 25% discount on your total booking. Includes complimentary breakfast and late checkout.'
  }
];
