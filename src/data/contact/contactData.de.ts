export interface ContactInfo {
  title: string;
  description: string;
  phone: string;
  email: string;
}

export interface ContactFormField {
  type: 'text' | 'email' | 'tel' | 'select';
  name: string;
  placeholder: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
}

export interface MapLocation {
  name: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const contactInfo: ContactInfo = {
  title: 'Kontaktieren Sie uns',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  phone: '+94 (0)81 2222962',
  email: 'info@shenayaresidence.com'
};

export const contactFormFields: ContactFormField[] = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Name',
    required: true
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'E-Mail',
    required: true
  },
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Telefonnummer',
    required: false
  },
  {
    type: 'select',
    name: 'subject',
    placeholder: 'Wie haben Sie von uns gehört?',
    required: false,
    options: [
      { value: '', label: 'Wie haben Sie von uns gehört?' },
      { value: 'google', label: 'Google Suche' },
      { value: 'social-media', label: 'Soziale Medien' },
      { value: 'friend', label: 'Freund/Familie' },
      { value: 'travel-agent', label: 'Reisebüro' },
      { value: 'other', label: 'Andere' }
    ]
  }
];

export const mapLocation: MapLocation = {
  name: 'Residence Shenaya',
  city: 'Kandy',
  country: 'Sri Lanka',
  latitude: 7.2906, // Example latitude for Kandy
  longitude: 80.6337 // Example longitude for Kandy
};
