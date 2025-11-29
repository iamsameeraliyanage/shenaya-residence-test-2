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
    content: 'The best part about this residence is the sense of community. They organize weekly social events, which helped me make friends quickly after moving to a new city.',
    author: 'John D.',
    position: 'Company CEO'
  },
  {
    id: '2',
    content: 'Really enjoyed my stay here! My studio apartment was spacious and quiet, perfect for studying. Maintenance requests were handled quickly, and I always felt safe thanks to the 24/7 security.',
    author: 'John D.',
    position: 'Company CEO'
  },
  {
    id: '3',
    content: 'Really enjoyed my stay here! My studio apartment was spacious and quiet, perfect for studying. Maintenance requests were handled quickly, and I always felt safe thanks to the 24/7 security.',
    author: 'John D.',
    position: 'Company CEO'
  },
  {
    id: '4',
    content: 'Really enjoyed my stay here! My studio apartment was spacious and quiet, perfect for studying. Maintenance requests were handled quickly, and I always felt safe thanks to the 24/7 security.',
    author: 'John D.',
    position: 'Company CEO'
  }
];
