// Common type definitions
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TestimonialData {
  id: number;
  content: string;
  author: string;
  position: string;
}

export interface DestinationData {
  id: number;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  gridClass: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
