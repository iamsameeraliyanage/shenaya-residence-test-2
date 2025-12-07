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
    title: 'NEWSLETTER ANMELDUNG',
    emailPlaceholder: 'Ihre E-Mail',
    subscribeButton: 'ABONNIEREN'
  },
  socialMedia: {
    facebook: 'FACEBOOK',
    instagram: 'INSTAGRAM',
    twitter: 'TWITTER'
  },
  getInTouch: {
    title: 'KONTAKT',
    phone: 'Tel: +94 (0)81-2054262',
    email: 'info@shenayaresidence.com',
    address: {
      line1: 'Nr. 59, Hill Crest Green,',
      line2: 'Bowalawatta, 20000',
      line3: 'Kandy, Sri Lanka'
    }
  },
  sitemap: {
    title: 'SITEMAP',
    links: {
      home: 'Startseite',
      shenaya: 'Shenaya',
      rooms: 'Zimmer',
      services: 'Dienstleistungen',
      gallery: 'Galerie',
      team: 'Team',
      contact: 'Kontakt',
      faq: 'FAQ'
    }
  }
};
