export interface HeroSection {
  mainImage: {
    src: string;
    alt: string;
  };
}

export interface WelcomeSection {
  title: string;
  leftRoom: {
    src: string;
    alt: string;
  };
  rightRoom: {
    src: string;
    alt: string;
  };
  centerText: {
    title: string;
    description: string;
  };
}

export interface AboutUsSection {
  staircase: {
    src: string;
    alt: string;
  };
  food: {
    src: string;
    alt: string;
  };
  content: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    buttonText: string;
  };
}

export interface RoomsSection {
  title: string;
  largeRoom: {
    src: string;
    alt: string;
  };
  roomArea: {
    src: string;
    alt: string;
  };
  bedroom: {
    src: string;
    alt: string;
  };
  textContent: {
    description: string;
    buttonText: string;
  };
}

export interface HomeDiningSection {
  title: string;
  description: string;
  buttonText: string;
  leftText: {
    title: string;
  };
  centerDining: {
    src: string;
    alt: string;
  };
  rightEvent: {
    src: string;
    alt: string;
    title: string;
  };
}

export const heroSection: HeroSection = {
  mainImage: {
    src: '/images/home/temple-kandy.jpg',
    alt: 'Temple of the Tooth - Kandy, Sri Lanka'
  }
};

export const welcomeSection: WelcomeSection = {
  title: 'Welcome to Shenaya, a\nboutique hotel near Kandy, Sri\nLanka, where Swiss precision\nmeets Sri Lankan warmth.',
  leftRoom: {
    src: '/images/home/room1.jpg',
    alt: 'Luxury Bathroom'
  },
  rightRoom: {
    src: '/images/home/room2.jpg',
    alt: 'Luxury Room Interior'
  },
  centerText: {
    title: 'Consequat nulla\nmi odio mattis',
    description: 'Massa cursus nulla sit nisl mattis lorem quam bibendum\namet. Tempor rhoncus amet sit lacinia arcu mi maecenas.'
  }
};

export const aboutUsSection: AboutUsSection = {
  staircase: {
    src: '/images/home/staircase.jpg',
    alt: 'Elegant Interior Staircase'
  },
  food: {
    src: '/images/home/food.jpg',
    alt: 'Traditional Sri Lankan Cuisine'
  },
  content: {
    subtitle: 'ABOUT US',
    title: 'We Focus On\nComfort And\nQuality',
    paragraphs: [
      'Available on a strictly limited basis for exclusive use, the Kinross House Estate represents the best of Scotland architecturally, historically, culturally and gastronomically.',
      'A secluded Estate that is available to hire for exclusive use holidays, corporate retreats, family get-togethers, special occasions and private events.'
    ],
    buttonText: 'EXPLORE'
  }
};

export const roomsSection: RoomsSection = {
  title: 'Discover Our Rooms',
  largeRoom: {
    src: '/images/home/largeroom.jpg',
    alt: 'Deluxe Room with Traditional Decor'
  },
  roomArea: {
    src: '/images/home/roomarea.jpg',
    alt: 'Modern Room with Sitting Area and Tea Service'
  },
  bedroom: {
    src: '/images/home/room3.jpg',
    alt: 'Traditional Bedroom with Sri Lankan Decor'
  },
  textContent: {
    description: 'Experience the charm of Sri Lanka in our stylish and modern rooms with a touch of local flair. Double rooms starting at $65 including breakfast and taxes, single occupancy starting at $45. Book now for a truly wonderful stay!',
    buttonText: 'Book Now'
  }
};

export const diningSection: HomeDiningSection = {
  title: 'We\'ll Pick You Up, We\'ll Set You Down, We\'ll Even Take You To Dinner',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada elit ipsum, nec ultrices diam commodo non. Duis nec elit diam. Nunc rutrum, velit sed vehicula cursus, purus turpis tincidunt erat, sed varius erat mauris quis lorem. Sed et metus dignissim, suscipit odio at, placerat purus. Sed facilisis laoreet sapien, ac sodales nulla. Nullam sed congue odio, et ornare eros.',
  buttonText: 'EXPLORE',
  leftText: {
    title: 'GET READY TO LIVE FOR A MEMORABLE DINNER'
  },
  centerDining: {
    src: '/images/home/dining.jpg',
    alt: 'Elegant Dining Experience'
  },
  rightEvent: {
    src: '/images/home/eventspace.jpg',
    alt: 'Bar and Event Space',
    title: 'EVENT UP'
  }
};
