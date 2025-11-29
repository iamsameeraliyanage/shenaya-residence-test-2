export interface RoomAmenities {
  privateBath: boolean;
  airConditioning: boolean;
  freeWifi: boolean;
  balcony: boolean;
  breakfast: boolean;
}

export interface RoomSpecifications {
  bedrooms?: number;
  livingRooms?: number;
  bathrooms?: number;
  unitsReady?: number;
  televisions?: number;
}

export interface Room {
  id: string;
  name: string;
  price: number;
  images: string[];
  amenities: RoomAmenities;
  specifications: RoomSpecifications;
}

// Amenity icon mapping
export const amenityIcons = {
  bedrooms: '/images/accomadation/ic_bedroom.jpg',
  livingRooms: '/images/accomadation/ic_livingroom.jpg',
  bathrooms: '/images/accomadation/ic_bathroom.jpg',
  unitsReady: '/images/accomadation/ic_ac 1.jpg',
  televisions: '/images/accomadation/ic_tv.jpg'
};

export const rooms: Room[] = [
  {
    id: 'room-1',
    name: 'Room 1',
    price: 85,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      unitsReady: 7,
      televisions: 2
    }
  },
  {
    id: 'room-2', 
    name: 'Room 2',
    price: 95,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: false,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      televisions: 1
    }
  },
  {
    id: 'room-3', 
    name: 'Room 3',
    price: 120,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      unitsReady: 5,
      televisions: 3
    }
  },
  {
    id: 'room-4', 
    name: 'Room 4',
    price: 75,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      privateBath: false,
      airConditioning: true,
      freeWifi: true,
      balcony: false,
      breakfast: false
    },
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      televisions: 1
    }
  },
  {
    id: 'room-5', 
    name: 'Room 5',
    price: 110,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 2,
      televisions: 2
    }
  },
  {
    id: 'room-6', 
    name: 'Room 6',
    price: 85,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      unitsReady: 7,
      televisions: 2
    }
  },
  {
    id: 'room-7', 
    name: 'Room 7',
    price: 85,
    images: [
      '/images/home/room1.jpg',
      '/images/home/room2.jpg',
      '/images/home/room3.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      unitsReady: 7,
      televisions: 2
    }
  },
  {
    id: 'room-8', 
    name: 'Room 8',
    price: 85,
    images: [
      '/images/home/largeroom.jpg',
      '/images/home/roomarea.jpg',
      '/images/home/room1.jpg'
    ],
    amenities: {
      privateBath: true,
      airConditioning: true,
      freeWifi: true,
      balcony: true,
      breakfast: true
    },
    specifications: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      unitsReady: 7,
      televisions: 2
    }
  }
];
