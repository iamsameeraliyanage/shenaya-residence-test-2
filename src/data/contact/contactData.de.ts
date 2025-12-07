export interface ContactInfo {
  title: string;
  description: string;
  phone: string;
  email: string;
}

export interface ContactFormField {
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  name: string;
  placeholder: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
}

export interface ContactPageContent {
  submitButton: string;
  submitting: string;
  successMessage: string;
  errorMessage: string;
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
    type: 'textarea',
    name: 'message',
    placeholder: 'Nachricht',
    required: false
  }
];

export const contactPageContent: ContactPageContent = {
  submitButton: 'Senden',
  submitting: 'Wird gesendet...',
  successMessage: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
  errorMessage: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
};

export const mapLocation: MapLocation = {
  name: 'Residence Shenaya',
  city: 'Kandy',
  country: 'Sri Lanka',
  latitude: 7.2906, // Example latitude for Kandy
  longitude: 80.6337 // Example longitude for Kandy
};
