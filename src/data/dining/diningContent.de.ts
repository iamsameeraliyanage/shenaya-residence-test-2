export interface DiningSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  backgroundColor?: string;
}

export interface ChefInfo {
  name: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const diningHeroSection: DiningSection = {
  id: 'hero',
  title: 'Gesunde Ernährung\nist ein wichtiger\nTeil des Lebensstils',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Neque congue arcu',
  image: '/images/dining/food1.jpg',
  imageAlt: 'Traditionelle sri-lankische Mahlzeit',
  backgroundColor: '#B8860B'
};

export const diningDeliciousMealSection: DiningSection = {
  id: 'delicious-meal',
  title: 'Lassen Sie uns das\nköstliche Essen genießen',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Neque congue arcu',
  image: '/images/dining/food2.jpg',
  imageAlt: 'Köstliches traditionelles Essen',
  backgroundColor: '#B8860B'
};

export const diningDecorativeSection = {
  image: '/images/dining/food3.jpg',
  imageAlt: 'Traditionelle Kochgefäße'
};

export const chefInfo: ChefInfo = {
  name: 'Küchenchef',
  title: 'Exzellenter\nKoch',
  image: '/images/dining/chef.png',
  imageAlt: 'Küchenchef',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec id elit tempor neque luctus convallis. Maecenas rutrum lobortis.\nNullam sed lorem tempus eros imperdiet laoreet ut vitae mauris.'
};

export const spiceColors = [
  { color: 'bg-orange-800' },
  { color: 'bg-yellow-100' },
  { color: 'bg-yellow-600' }
];
