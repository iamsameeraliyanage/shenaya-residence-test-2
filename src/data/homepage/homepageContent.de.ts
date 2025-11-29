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
    alt: 'Zahntempel - Kandy, Sri Lanka'
  }
};

export const welcomeSection: WelcomeSection = {
  title: 'Willkommen bei Shenaya, einem\nBoutique-Hotel in der Nähe von\nKandy, Sri Lanka, wo Schweizer\nPräzision auf sri-lankische\nHerzlichkeit trifft.',
  leftRoom: {
    src: '/images/home/room1.jpg',
    alt: 'Luxuriöses Badezimmer'
  },
  rightRoom: {
    src: '/images/home/room2.jpg',
    alt: 'Luxuriöse Zimmer-Inneneinrichtung'
  },
  centerText: {
    title: 'Consequat nulla\nmi odio mattis',
    description: 'Massa cursus nulla sit nisl mattis lorem quam bibendum\namet. Tempor rhoncus amet sit lacinia arcu mi maecenas.'
  }
};

export const aboutUsSection: AboutUsSection = {
  staircase: {
    src: '/images/home/staircase.jpg',
    alt: 'Elegante Innentreppe'
  },
  food: {
    src: '/images/home/food.jpg',
    alt: 'Traditionelle sri-lankische Küche'
  },
  content: {
    subtitle: 'ÜBER UNS',
    title: 'Wir konzentrieren\nuns auf Komfort\nund Qualität',
    paragraphs: [
      'Verfügbar auf streng limitierter Basis für exklusive Nutzung, repräsentiert das Kinross House Estate das Beste Schottlands in architektonischer, historischer, kultureller und gastronomischer Hinsicht.',
      'Ein abgelegenes Anwesen, das zur exklusiven Nutzung für Urlaub, Firmen-Retreats, Familientreffen, besondere Anlässe und private Veranstaltungen gemietet werden kann.'
    ],
    buttonText: 'ENTDECKEN'
  }
};

export const roomsSection: RoomsSection = {
  title: 'Entdecken Sie unsere Zimmer',
  largeRoom: {
    src: '/images/home/largeroom.jpg',
    alt: 'Deluxe-Zimmer mit traditioneller Dekoration'
  },
  roomArea: {
    src: '/images/home/roomarea.jpg',
    alt: 'Modernes Zimmer mit Sitzbereich und Tee-Service'
  },
  bedroom: {
    src: '/images/home/room3.jpg',
    alt: 'Traditionelles Schlafzimmer mit sri-lankischer Dekoration'
  },
  textContent: {
    description: 'Erleben Sie den Charme Sri Lankas in unseren stilvollen und modernen Zimmern mit einem Hauch von lokalem Flair. Doppelzimmer ab 65 $ inklusive Frühstück und Steuern, Einzelbelegung ab 45 $. Buchen Sie jetzt für einen wirklich wunderbaren Aufenthalt!',
    buttonText: 'Jetzt buchen'
  }
};

export const diningSection: HomeDiningSection = {
  title: 'Wir holen Sie ab, bringen Sie hin und nehmen Sie sogar mit zum Abendessen',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada elit ipsum, nec ultrices diam commodo non. Duis nec elit diam. Nunc rutrum, velit sed vehicula cursus, purus turpis tincidunt erat, sed varius erat mauris quis lorem. Sed et metus dignissim, suscipit odio at, placerat purus. Sed facilisis laoreet sapien, ac sodales nulla. Nullam sed congue odio, et ornare eros.',
  buttonText: 'ENTDECKEN',
  leftText: {
    title: 'BEREITEN SIE SICH AUF EIN UNVERGESSLICHES ABENDESSEN VOR'
  },
  centerDining: {
    src: '/images/home/dining.jpg',
    alt: 'Elegantes Speise-Erlebnis'
  },
  rightEvent: {
    src: '/images/home/eventspace.jpg',
    alt: 'Bar und Veranstaltungsraum',
    title: 'VERANSTALTUNG'
  }
};
