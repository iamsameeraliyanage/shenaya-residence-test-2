export interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
  size: 'large' | 'medium' | 'small' | 'tall';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Hochzeit',
    image: '/images/home/temple-kandy.jpg',
    title: 'Tempelblick',
    size: 'large'
  },
  {
    id: 2,
    category: 'Essen',
    image: '/images/dining/food1.jpg',
    title: 'Traditionelles Essen',
    size: 'medium'
  },
  {
    id: 3,
    category: 'Zimmer',
    image: '/images/home/staircase.jpg',
    title: 'Elegante Treppe',
    size: 'medium'
  },
  {
    id: 4,
    category: 'Zimmer',
    image: '/images/home/room1.jpg',
    title: 'Luxus-Zimmer',
    size: 'medium'
  },
  {
    id: 5,
    category: 'Essen',
    image: '/images/dining/food2.jpg',
    title: 'Küchenportrait',
    size: 'small'
  },
  {
    id: 6,
    category: 'Essen',
    image: '/images/dining/food3.jpg',
    title: 'Traditionelles Buffet',
    size: 'small'
  },
  {
    id: 7,
    category: 'Zimmer',
    image: '/images/home/room2.jpg',
    title: 'Schlafzimmer-Suite',
    size: 'medium'
  },
  {
    id: 8,
    category: 'Essen',
    image: '/images/dining/chef.png',
    title: 'Weinauswahl',
    size: 'tall'
  },
  {
    id: 9,
    category: 'Zimmer',
    image: '/images/home/room3.jpg',
    title: 'Badezimmer',
    size: 'small'
  },
  {
    id: 10,
    category: 'Hochzeit',
    image: '/images/home/garden.png',
    title: 'Gartenblick',
    size: 'large'
  },
  {
    id: 11,
    category: 'Zimmer',
    image: '/images/home/roomarea.jpg',
    title: 'Gebäude-Außenansicht',
    size: 'tall'
  },
  {
    id: 12,
    category: 'Zimmer',
    image: '/images/home/largeroom.jpg',
    title: 'Geräumiges Zimmer',
    size: 'medium'
  }
];

export const galleryCategories = ['Alle', 'Hochzeit', 'Essen', 'Zimmer'];
