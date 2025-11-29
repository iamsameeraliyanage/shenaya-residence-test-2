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
    category: 'Wedding',
    image: '/images/home/temple-kandy.jpg',
    title: 'Temple View',
    size: 'large'
  },
  {
    id: 2,
    category: 'Food',
    image: '/images/dining/food1.jpg',
    title: 'Traditional Dining',
    size: 'medium'
  },
  {
    id: 3,
    category: 'Rooms',
    image: '/images/home/staircase.jpg',
    title: 'Elegant Staircase',
    size: 'medium'
  },
  {
    id: 4,
    category: 'Rooms',
    image: '/images/home/room1.jpg',
    title: 'Luxury Room',
    size: 'medium'
  },
  {
    id: 5,
    category: 'Food',
    image: '/images/dining/food2.jpg',
    title: 'Chef Portrait',
    size: 'small'
  },
  {
    id: 6,
    category: 'Food',
    image: '/images/dining/food3.jpg',
    title: 'Traditional Spread',
    size: 'small'
  },
  {
    id: 7,
    category: 'Rooms',
    image: '/images/home/room2.jpg',
    title: 'Bedroom Suite',
    size: 'medium'
  },
  {
    id: 8,
    category: 'Food',
    image: '/images/dining/chef.png',
    title: 'Wine Selection',
    size: 'tall'
  },
  {
    id: 9,
    category: 'Rooms',
    image: '/images/home/room3.jpg',
    title: 'Bathroom',
    size: 'small'
  },
  {
    id: 10,
    category: 'Wedding',
    image: '/images/home/garden.png',
    title: 'Garden View',
    size: 'large'
  },
  {
    id: 11,
    category: 'Rooms',
    image: '/images/home/roomarea.jpg',
    title: 'Building Exterior',
    size: 'tall'
  },
  {
    id: 12,
    category: 'Rooms',
    image: '/images/home/largeroom.jpg',
    title: 'Spacious Room',
    size: 'medium'
  }
];

export const galleryCategories = ['All', 'Wedding', 'Food', 'Rooms'];
