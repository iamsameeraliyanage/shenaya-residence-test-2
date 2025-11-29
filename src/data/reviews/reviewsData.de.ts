export interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  company: string;
}

export interface ReviewsPageContent {
  title: string;
  subtitle: string;
  overallRating: string;
  totalReviews: string;
  image: {
    src: string;
    alt: string;
  };
  callToAction: {
    text: string;
    buttonText: string;
  };
}

export const reviewsPageContent: ReviewsPageContent = {
  title: 'Hören Sie von unseren\nzufriedenen Kunden',
  subtitle: 'Was unsere Gäste über ihre Erfahrung sagen',
  overallRating: '4.8/5',
  totalReviews: '245 Bewertungen',
  image: {
    src: '/images/home/staircase.jpg',
    alt: 'Wunderschöne Treppe im Innenbereich'
  },
  callToAction: {
    text: 'Seien Sie die nächste Person, die uns bewertet!',
    buttonText: 'Reservierung vornehmen'
  }
};

export const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Das Beste an dieser Residenz ist das Gemeinschaftsgefühl. Sie organisieren wöchentliche gesellschaftliche Veranstaltungen, die mir geholfen haben, nach dem Umzug in eine neue Stadt schnell Freunde zu finden.",
    author: "John D.",
    company: "Firmenchef"
  },
  {
    id: 2,
    rating: 5,
    text: "Habe meinen Aufenthalt hier wirklich genossen! Mein Studio-Apartment war geräumig und ruhig, perfekt zum Lernen. Wartungsanfragen wurden schnell bearbeitet, und ich fühlte mich dank der 24/7-Sicherheit immer sicher.",
    author: "Sarah M.",
    company: "Studentin"
  },
  {
    id: 3,
    rating: 5,
    text: "Außergewöhnlicher Service und wunderschöne traditionelle Architektur. Das Personal hat alles getan, um unsere Flitterwochen besonders zu machen. Die Lage ist perfekt, um Kandys Attraktionen zu erkunden.",
    author: "Michael R.",
    company: "Reiseblogger"
  },
  {
    id: 4,
    rating: 4,
    text: "Wunderbare authentische sri-lankische Erfahrung. Das Frühstück war außergewöhnlich und die kulturellen Aktivitäten waren sehr informativ. Werde definitiv Freunden empfehlen.",
    author: "Lisa K.",
    company: "Marketing Direktorin"
  }
];
