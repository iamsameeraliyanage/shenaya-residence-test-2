export interface DiscoverSection {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  additionalImages?: Array<{
    src: string;
    alt: string;
  }>;
}

export interface NewsletterSection {
  title: string;
  placeholder: string;
  buttonText: string;
  backgroundImage: string;
}

// Hero/Calm Environment Section
export const calmEnvironmentSection: DiscoverSection = {
  id: 'calm-environment',
  title: 'CALM\nENVIRONMENT',
  description: 'Surrounded by lush greenery and scenic views, the hotel offers a peaceful escape where guests can enjoy a tranquil atmosphere and complete relaxation.\n\nThe calm environment promotes rest, reduces stress, and enhances well-being, while the gentle sounds of birdsong, rustling leaves, and flowing water create a natural harmony that enriches the overall experience.',
  image: '/images/discover/calmenvironment1.jpg',
  imageAlt: 'Peaceful lake view with traditional architecture',
  additionalImages: [
    {
      src: '/images/discover/calmenvironment2.jpg',
      alt: 'Garden landscape view'
    }
  ]
};

// Hiking Section
export const hikingSection: DiscoverSection = {
  id: 'hiking',
  title: 'HIKING',
  description: 'Explore our guided hiking trails through lush forests and mountain paths. Our breathtaking viewpoints, diverse wildlife, and challenging routes are perfect for adventurers seeking to explore the natural beauty and capture stunning views of our outdoor adventure.',
  image: '/images/discover/hiking1.jpg',
  imageAlt: 'Mountain hiking trail with temple views',
  additionalImages: [
    {
      src: '/images/discover/hiking2.jpg',
      alt: 'Temple on hilltop'
    },
    {
      src: '/images/home/garden.png',
      alt: 'Garden landscape'
    }
  ]
};

// Nature Walks Section
export const natureWalksSection: DiscoverSection = {
  id: 'nature-walks',
  title: 'NATURE WALKS',
  description: 'Take leisurely strolls walks through pristine forests, gardens and trails. Discover the diverse local flora and fauna and enjoy the soothing sounds and scents of the natural surroundings.',
  image: '/images/discover/nature2.jpg',
  imageAlt: 'Nature trail through forest',
  additionalImages: [
    {
      src: '/images/discover/nature1.jpg',
      alt: 'Stone staircase in nature'
    }
  ]
};

// Ayurvedic Treatments Section
export const ayurvedicTreatmentsSection: DiscoverSection = {
  id: 'ayurvedic-treatments',
  title: 'AYURVEDIC\nTREATMENTS',
  description: 'Experience the ancient healing traditions of Ayurveda with our specialized treatments designed to rejuvenate your mind, body, and soul and promote overall wellness in a serene natural environment.',
  image: '/images/discover/ayurvedic1.jpg',
  imageAlt: 'Traditional Ayurvedic tea preparation',
  additionalImages: [
    {
      src: '/images/discover/ayurvedic2.jpg',
      alt: 'Traditional wellness setting'
    }
  ]
};

// Cultural Tours Section
export const culturalToursSection: DiscoverSection = {
  id: 'cultural-tours',
  title: 'CULTURAL\nTOURS',
  description: 'Explore the rich local culture through guided tours of historic sites, temples, and traditional villages. Learn about centuries-old engineering marvels and the heritage and customs of the region.',
  image: '/images/discover/cultural1.jpg',
  imageAlt: 'Historical temple and cultural site',
  additionalImages: [
    {
      src: '/images/discover/cultural2.jpg',
      alt: 'Traditional cultural venue'
    }
  ]
};

// Newsletter Section
export const newsletterSection: NewsletterSection = {
  title: 'NEWSLETTER SIGN UP',
  placeholder: 'Your email',
  buttonText: 'Subscribe',
  backgroundImage: '/images/home/lake.jpg'
};
