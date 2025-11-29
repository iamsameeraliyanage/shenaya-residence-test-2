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
  title: 'Healthy Eating\nis important\npart of lifestyle',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Neque congue arcu',
  image: '/images/dining/food1.jpg',
  imageAlt: 'Traditional Sri Lankan meal spread',
  backgroundColor: '#B8860B'
};

export const diningDeliciousMealSection: DiningSection = {
  id: 'delicious-meal',
  title: 'Let\'s enjoy the\ndelicious meal',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Neque congue arcu',
  image: '/images/dining/food2.jpg',
  imageAlt: 'Delicious traditional meal',
  backgroundColor: '#B8860B'
};

export const diningDecorativeSection = {
  image: '/images/dining/food3.jpg',
  imageAlt: 'Traditional cooking vessels'
};

export const chefInfo: ChefInfo = {
  name: 'Executive Chef',
  title: 'Excellent\ncook',
  image: '/images/dining/chef.png',
  imageAlt: 'Executive Chef',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec id elit tempor neque luctus convallis. Maecenas rutrum lobortis.\nNullam sed lorem tempus eros imperdiet laoreet ut vitae mauris.'
};

export const spiceColors = [
  { color: 'bg-orange-800' },
  { color: 'bg-yellow-100' },
  { color: 'bg-yellow-600' }
];
