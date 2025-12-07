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
  title: 'Get in Touch',
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
    placeholder: 'Email',
    required: true
  },
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Phone Number',
    required: true
  },
  {
    type: 'textarea',
    name: 'message',
    placeholder: 'Message',
    required: false
  }
];

export const contactPageContent: ContactPageContent = {
  submitButton: 'Send',
  submitting: 'Sending...',
  successMessage: 'Thank you! Your message has been sent successfully.',
  errorMessage: 'There was an error sending your message. Please try again.'
};

export const mapLocation: MapLocation = {
  name: 'Residence Shenaya',
  city: 'Kandy',
  country: 'Sri Lanka',
  latitude: 7.2906, // Example latitude for Kandy
  longitude: 80.6337 // Example longitude for Kandy
};
