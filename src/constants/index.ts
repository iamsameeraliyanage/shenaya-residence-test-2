// Application constants
export const APP_CONFIG = {
  name: 'Shenaya Residence',
  description: 'Premium accommodation in Kandy, Sri Lanka',
  url: 'https://shenaya-residence.com',
  supportedLocales: ['en', 'de'],
  defaultLocale: 'en'
} as const;

export const CONTACT_INFO = {
  email: 'info@shenaya-residence.com',
  phone: '+94 XX XXX XXXX',
  address: 'Kandy, Sri Lanka'
} as const;

export const API_ENDPOINTS = {
  booking: '/api/book',
  contact: '/api/contact'
} as const;
