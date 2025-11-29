export interface Destination {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  gridClass: string; // CSS classes for grid positioning
}

export const kandyDestinations: Destination[] = [
  // Column 1
  {
    id: 'sri-dalada-maligawa',
    name: 'Sri Dalada Maligawa',
    description: 'Large temple featuring rituals & services devoted to the Sacred Tooth Relic, the canine tooth of Buddha.',
    image: '/images/home/temple.jpg',
    imageAlt: 'Sri Dalada Maligawa',
    gridClass: 'lg:row-span-2 lg:col-start-1 lg:row-start-1' // Column 1, Rows 1-2
  },
  {
    id: 'ceylon-tea-museum',
    name: 'Ceylon Tea Museum',
    description: 'The Ceylon Tea Museum is a celebration of the history, process, and evolution of the tea industry in Sri Lanka.',
    image: '/images/home/tea.jpg',
    imageAlt: 'Ceylon Tea Museum',
    gridClass: 'lg:col-start-1 lg:row-start-3' // Column 1, Row 3
  },
  // Column 2
  {
    id: 'kandy-lake',
    name: 'Kandy Lake',
    description: 'Tranquil manmade lake with a path for walking & jogging & an adjacent temple with Buddha\'s tooth.',
    image: '/images/home/lake.jpg',
    imageAlt: 'Kandy Lake',
    gridClass: 'lg:col-start-2 lg:row-start-1' // Column 2, Row 1
  },
  {
    id: 'udawatta-kele-sanctuary',
    name: 'Udawatta Kele Sanctuary',
    description: 'Wildlife viewing is popular within this large forest with hiking trails & interpretive information.',
    image: '/images/home/udawaththa.jpg',
    imageAlt: 'Udawatta Kele Sanctuary',
    gridClass: 'lg:row-span-2 lg:col-start-2 lg:row-start-2' // Column 2, Rows 2-3
  },
  // Column 3
  {
    id: 'royal-botanic-gardens',
    name: 'Royal Botanic Gardens',
    subtitle: 'Peradeniya',
    description: 'Beautiful botanical garden featuring tropical plants, orchids, and stunning landscapes perfect for nature lovers.',
    image: '/images/home/garden.png',
    imageAlt: 'Royal Botanic Gardens',
    gridClass: 'lg:row-span-2 lg:col-start-3 lg:row-start-1' // Column 3, Rows 1-2
  },
  {
    id: 'international-buddhist-museum',
    name: 'International Buddhist Museum',
    description: 'Museum showcasing exhibits devoted to Buddhist history around the world in a Victorian-era space.',
    image: '/images/home/museum.jpg',
    imageAlt: 'International Buddhist Museum',
    gridClass: 'lg:col-start-3 lg:row-start-3' // Column 3, Row 3
  }
];
