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
    description: 'Großer Tempel mit Ritualen und Gottesdiensten, die der Heiligen Zahnreliquie, dem Eckzahn Buddhas, gewidmet sind.',
    image: '/images/home/temple.jpg',
    imageAlt: 'Sri Dalada Maligawa',
    gridClass: 'lg:row-span-2 lg:col-start-1 lg:row-start-1' // Column 1, Rows 1-2
  },
  {
    id: 'ceylon-tea-museum',
    name: 'Ceylon Tee Museum',
    description: 'Das Ceylon Tee Museum ist eine Würdigung der Geschichte, des Prozesses und der Entwicklung der Teeindustrie in Sri Lanka.',
    image: '/images/home/tea.jpg',
    imageAlt: 'Ceylon Tee Museum',
    gridClass: 'lg:col-start-1 lg:row-start-3' // Column 1, Row 3
  },
  // Column 2
  {
    id: 'kandy-lake',
    name: 'Kandy See',
    description: 'Ruhiger künstlicher See mit einem Weg zum Spazierengehen und Joggen und einem angrenzenden Tempel mit Buddhas Zahn.',
    image: '/images/home/lake.jpg',
    imageAlt: 'Kandy See',
    gridClass: 'lg:col-start-2 lg:row-start-1' // Column 2, Row 1
  },
  {
    id: 'udawatta-kele-sanctuary',
    name: 'Udawatta Kele Schutzgebiet',
    description: 'Wildtierbeobachtung ist beliebt in diesem großen Wald mit Wanderwegen und informativen Erklärungen.',
    image: '/images/home/udawaththa.jpg',
    imageAlt: 'Udawatta Kele Schutzgebiet',
    gridClass: 'lg:row-span-2 lg:col-start-2 lg:row-start-2' // Column 2, Rows 2-3
  },
  // Column 3
  {
    id: 'royal-botanic-gardens',
    name: 'Königlicher Botanischer Garten',
    subtitle: 'Peradeniya',
    description: 'Wunderschöner botanischer Garten mit tropischen Pflanzen, Orchideen und atemberaubenden Landschaften, perfekt für Naturliebhaber.',
    image: '/images/home/garden.png',
    imageAlt: 'Königlicher Botanischer Garten',
    gridClass: 'lg:row-span-2 lg:col-start-3 lg:row-start-1' // Column 3, Rows 1-2
  },
  {
    id: 'international-buddhist-museum',
    name: 'Internationales Buddhistisches Museum',
    description: 'Museum mit Ausstellungen zur buddhistischen Geschichte aus aller Welt in einem viktorianischen Gebäude.',
    image: '/images/home/museum.jpg',
    imageAlt: 'Internationales Buddhistisches Museum',
    gridClass: 'lg:col-start-3 lg:row-start-3' // Column 3, Row 3
  }
];
