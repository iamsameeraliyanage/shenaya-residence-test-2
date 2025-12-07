export interface FooterContent {
  newsletter: {
    title: string;
    emailPlaceholder: string;
    subscribeButton: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  getInTouch: {
    title: string;
    phone: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
  };
  sitemap: {
    title: string;
    links: {
      home: string;
      shenaya: string;
      rooms: string;
      services: string;
      gallery: string;
      team: string;
      contact: string;
      faq: string;
    };
  };
}

export const footerContent: FooterContent = {
  newsletter: {
    title: 'NEWSLETTER SIGN UP',
    emailPlaceholder: 'Your email',
    subscribeButton: 'SUBSCRIBE'
  },
  socialMedia: {
    facebook: 'FACEBOOK',
    instagram: 'INSTAGRAM',
    twitter: 'TWITTER'
  },
  getInTouch: {
    title: 'GET IN TOUCH',
    phone: 'Tel: +94 (0)81-2054262',
    email: 'info@shenayaresidence.com',
    address: {
      line1: 'No. 59, Hill Crest Green,',
      line2: 'Bowalawatta, 20000',
      line3: 'Kandy, Sri Lanka'
    }
  },
  sitemap: {
    title: 'SITEMAP',
    links: {
      home: 'Home',
      shenaya: 'Shenaya',
      rooms: 'Rooms',
      services: 'Services',
      gallery: 'Gallery',
      team: 'Team',
      contact: 'Contact',
      faq: 'FAQ'
    }
  }
};
