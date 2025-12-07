import { t } from "i18next";

export interface RoomAmenities {
  balcony: boolean;
  wifi: boolean;
  ac: boolean;
  tv: boolean;
  teaCoffeeMaker: boolean;
  miniFridge: boolean;
}

export interface RoomSpecifications {
  privateBath: boolean;
  doubleBed: boolean;
  queenSizeBed: boolean;
  sofaBed: boolean;
}

export interface Room {
  id: string;
  name: string;
  type: string;
  capacity: string;
  view: string;
  price: number;
  images: string[];
  amenities: RoomAmenities;
  specifications: RoomSpecifications;
}

export interface RoomLabels {
  // General room labels
  perDay: string;
  selectThisRoom: string;
  roomSelected: string;
  roomFeatures: string;
  bedrooms: string;
  bedroom: string;
  livingRooms: string;
  livingRoom: string;
  bathrooms: string;
  bathroom: string;
  unitsAvailable: string;
  televisions: string;
  television: string;
  selected: string;
  previousImage: string;
  nextImage: string;
  previousRoom: string;
  nextRoom: string;
  // Room selector specific labels
  title: string;
  selectRoomsLabel: string;
  numberOfGuestsLabel: string;
  selectRoomsPlaceholder: string;
  numberOfGuestsPlaceholder: string;
  roomsSelected: string;
  doubleRoom: string;
  upToGuests: string;
  guest: string;
  guests: string;
  wifiAvailable: string;
  acAvailable: string;
  selectedRoomsTitle: string;
  perNight: string;
  totalPerNight: string;
}

export interface AccommodationPageContent {
  title: string;
  browseMessage: string;
  oneRoomSelected: string;
  multipleRoomsSelected: string;
  noRoomsInfo: string;
  reviewInfo: string;
  proceedButton: string;
}

// Amenity icon mapping (same for all languages)
export const amenityIcons = {
  balcony: "fi fi-ts-balcony",
  wifi: "fi fi-ts-wifi",
  ac: "fi fi-ts-air-conditioner",
  tv: "fi fi-ts-tv-music",
  teaCoffeeMaker: "fi fi-ts-coffee-maker",
  miniFridge: "fi fi-ts-refrigerator"
};

export const amenityLabels: { [key: string]: string } = {
  balcony: 'Balkon',
  wifi: 'WLAN',
  ac: 'Klimaanlage',
  tv: 'Fernseher',
  teaCoffeeMaker: 'Tee-/Kaffeemaschine',
  miniFridge: 'Minikühlschrank'
};

// Specification icon mapping (same for all languages)
export const specificationIcons = {
  privateBath: "fi fi-ts-bath",
  doubleBed: "fi fi-ts-bed-alt",
  queenSizeBed: "fi fi-ts-bed-alt",
  sofaBed: "fi fi-ts-couch"
};

export const specificationLabels: { [key: string]: string } = {
  privateBath: 'Privates Bad',
  doubleBed: 'Doppelbett',
  queenSizeBed: 'Queensize-Bett',
  sofaBed: 'Schlafsofa'
};

export const roomLabels: RoomLabels = {
  // General room labels
  perDay: 'pro Tag',
  selectThisRoom: 'Dieses Zimmer wählen',
  roomSelected: 'Zimmer ausgewählt ✓',
  roomFeatures: 'Zimmerausstattung',
  bedrooms: 'Schlafzimmer',
  bedroom: 'Schlafzimmer',
  livingRooms: 'Wohnzimmer',
  livingRoom: 'Wohnzimmer',
  bathrooms: 'Badezimmer',
  bathroom: 'Badezimmer',
  unitsAvailable: 'Verfügbar',
  televisions: 'Fernseher',
  television: 'Fernseher',
  selected: 'Ausgewählt ✓',
  previousImage: 'Vorheriges Bild',
  nextImage: 'Nächstes Bild',
  previousRoom: 'Vorheriges Zimmer',
  nextRoom: 'Nächstes Zimmer',
  // Room selector specific labels
  title: 'Zimmer & Gäste auswählen',
  selectRoomsLabel: 'Zimmer auswählen',
  numberOfGuestsLabel: 'Anzahl der Gäste',
  selectRoomsPlaceholder: 'Zimmer auswählen',
  numberOfGuestsPlaceholder: 'Anzahl der Gäste auswählen',
  roomsSelected: 'Zimmer ausgewählt',
  doubleRoom: 'Doppelzimmer',
  upToGuests: 'Bis zu',
  guest: 'Gast',
  guests: 'Gäste',
  wifiAvailable: 'WLAN verfügbar',
  acAvailable: 'Klimaanlage verfügbar',
  selectedRoomsTitle: 'Ausgewählte Zimmer:',
  perNight: '/Nacht',
  totalPerNight: 'Gesamt pro Nacht:'
};

export const accommodationPageContent: AccommodationPageContent = {
  title: 'Unsere Unterkünfte',
  browseMessage: 'Durchsuchen Sie unsere 8 verfügbaren Zimmer mit bevorzugten Ausstattungsmerkmalen.',
  oneRoomSelected: 'Sie haben 1 Zimmer mit Ihren bevorzugten Ausstattungsmerkmalen ausgewählt.',
  multipleRoomsSelected: 'Sie haben {count} Zimmer mit Ihren bevorzugten Ausstattungsmerkmalen ausgewählt.',
  noRoomsInfo: 'Wählen Sie Ihre bevorzugten Zimmer aus und fahren Sie mit Ihrer Reservierung fort.',
  reviewInfo: 'Überprüfen Sie Ihre Auswahl und fahren Sie mit Ihrer Reservierung fort.',
  proceedButton: 'Zur Reservierung'
};

export const rooms: Room[] = [
  {
    id: 'room-1',
    name: 'Zimmer 1',
    type: 'Doppelzimmer',
    capacity: '1 Person/Paar',
    view: 'Bergblick',
    price: 85,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      balcony: false,
      wifi: true,
      ac: true,
      tv: false,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  },
  {
    id: 'room-2', 
    name: 'Zimmer 2',
    type: 'Doppelzimmer',
    capacity: '1 Person/Paar',
    view: 'Bergblick',
    price: 95,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      balcony: false,
      wifi: true,
      ac: true,
      tv: true,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  },
  {
    id: 'room-3', 
    name: 'Zimmer 3',
    type: 'Familienzimmer',
    capacity: 'Eltern & 2 Kinder',
    view: 'Bergblick',
    price: 120,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      balcony: false,
      wifi: true,
      ac: true,
      tv: false,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: false,
      queenSizeBed: true,
      sofaBed: true
    }
  },
  {
    id: 'room-4', 
    name: 'Zimmer 4',
    type: 'Doppelzimmer',
    capacity: '2 Personen',
    view: 'Terrassenblick',
    price: 75,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      balcony: false,
      wifi: true,
      ac: true,
      tv: false,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  },
  {
    id: 'room-5', 
    name: 'Zimmer 5',
    type: 'Doppelzimmer',
    capacity: '2 Personen',
    view: 'Bergblick',
    price: 110,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      balcony: true,
      wifi: true,
      ac: true,
      tv: true,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  },
  {
    id: 'room-6', 
    name: 'Zimmer 6',
    type: 'Doppelzimmer',
    capacity: '2 Personen',
    view: 'Bergblick',
    price: 85,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      balcony: false,
      wifi: true,
      ac: true,
      tv: true,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  },
  {
    id: 'room-7', 
    name: 'Zimmer 7',
    type: 'Familienzimmer',
    capacity: 'Eltern & 2 Kinder',
    view: 'Bergblick',
    price: 85,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      balcony: true,
      wifi: true,
      ac: true,
      tv: true,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: false,
      queenSizeBed: true,
      sofaBed: true
    }
  },
  {
    id: 'room-8', 
    name: 'Zimmer 8',
    type: 'Doppelzimmer',
    capacity: '1 Person/2 Personen',
    view: 'Bergblick',
    price: 85,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      balcony: true,
      wifi: true,
      ac: true,
      tv: true,
      teaCoffeeMaker: true,
      miniFridge: true
    },
    specifications: {
      privateBath: true,
      doubleBed: true,
      queenSizeBed: false,
      sofaBed: false
    }
  }
];
