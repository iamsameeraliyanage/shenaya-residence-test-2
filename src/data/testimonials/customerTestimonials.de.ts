export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company?: string;
}

export const customerTestimonials: Testimonial[] = [
  {
    id: '1',
    content: 'Das Beste an dieser Residenz ist das Gemeinschaftsgefühl. Sie organisieren wöchentliche gesellschaftliche Veranstaltungen, die mir geholfen haben, nach dem Umzug in eine neue Stadt schnell Freunde zu finden.',
    author: 'John D.',
    position: 'Firmenchef'
  },
  {
    id: '2',
    content: 'Habe meinen Aufenthalt hier wirklich genossen! Mein Studio-Apartment war geräumig und ruhig, perfekt zum Lernen. Wartungsanfragen wurden schnell bearbeitet, und ich fühlte mich dank der 24/7-Sicherheit immer sicher.',
    author: 'John D.',
    position: 'Firmenchef'
  },
  {
    id: '3',
    content: 'Habe meinen Aufenthalt hier wirklich genossen! Mein Studio-Apartment war geräumig und ruhig, perfekt zum Lernen. Wartungsanfragen wurden schnell bearbeitet, und ich fühlte mich dank der 24/7-Sicherheit immer sicher.',
    author: 'John D.',
    position: 'Firmenchef'
  },
  {
    id: '4',
    content: 'Habe meinen Aufenthalt hier wirklich genossen! Mein Studio-Apartment war geräumig und ruhig, perfekt zum Lernen. Wartungsanfragen wurden schnell bearbeitet, und ich fühlte mich dank der 24/7-Sicherheit immer sicher.',
    author: 'John D.',
    position: 'Firmenchef'
  }
];
