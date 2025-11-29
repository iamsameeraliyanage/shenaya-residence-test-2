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
  title: 'Hear From Our\nSatisfied Clients',
  subtitle: 'What our guests say about their experience',
  overallRating: '4.8/5',
  totalReviews: '245 Reviews',
  image: {
    src: '/images/home/staircase.jpg',
    alt: 'Beautiful staircase interior'
  },
  callToAction: {
    text: 'Be the next person to review us!',
    buttonText: 'Make reservation'
  }
};

export const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "The best part about this residence is the sense of community. They organise weekly social events, which helped me make friends quickly after moving to a new city.",
    author: "John D.",
    company: "Company CEO"
  },
  {
    id: 2,
    rating: 5,
    text: "Really enjoyed my stay here! My studio apartment was spacious and quiet, perfect for studying. Maintenance requests were handled quickly, and I always felt safe thanks to the 24/7 security.",
    author: "Sarah M.",
    company: "Graduate Student"
  },
  {
    id: 3,
    rating: 5,
    text: "Outstanding service and beautiful traditional architecture. The staff went above and beyond to make our honeymoon special. The location is perfect for exploring Kandy's attractions.",
    author: "Michael R.",
    company: "Travel Blogger"
  },
  {
    id: 4,
    rating: 4,
    text: "Wonderful authentic Sri Lankan experience. The breakfast was exceptional and the cultural activities were very informative. Will definitely recommend to friends.",
    author: "Lisa K.",
    company: "Marketing Director"
  }
];
