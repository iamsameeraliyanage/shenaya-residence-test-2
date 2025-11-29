export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQPageContent {
  title: string;
  subtitle: string;
}

export const faqPageContent: FAQPageContent = {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about your stay at Shenaya Residence. If you don\'t find what you\'re looking for, feel free to contact us directly.'
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the check in and check out time?",
    answer: "Check-in is from 2:00 PM and check-out is until 11:00 AM. Early check-in and late check-out can be arranged upon request, subject to availability."
  },
  {
    id: 2,
    question: "Do you accommodate special dietary requirements?",
    answer: "Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and other special dietary needs. Please inform us at the time of booking about any specific requirements."
  },
  {
    id: 3,
    question: "Do you provide airport transportation?",
    answer: "Yes, we offer airport pickup and drop-off services for an additional fee. Please contact us at least 24 hours in advance to arrange transportation."
  },
  {
    id: 4,
    question: "What is included in the room rate?",
    answer: "Room rates include complimentary breakfast, WiFi access, air conditioning, daily housekeeping, and access to all hotel facilities including the garden and common areas."
  },
  {
    id: 5,
    question: "What activities are included in the stay?",
    answer: "We offer complimentary activities such as guided garden tours, cultural orientation sessions, and assistance with local attraction bookings. Additional activities can be arranged for a fee."
  },
  {
    id: 6,
    question: "How do I make a reservation?",
    answer: "You can make a reservation through our website, by calling us directly, or by sending an email. We recommend booking in advance, especially during peak seasons."
  },
  {
    id: 7,
    question: "Is WiFi available throughout the property?",
    answer: "Yes, complimentary high-speed WiFi is available throughout the entire property, including all rooms, common areas, and outdoor spaces."
  },
  {
    id: 8,
    question: "Is there a spa or wellness center?",
    answer: "We offer wellness services including traditional Sri Lankan Ayurvedic treatments, massage services, and yoga sessions. Please contact our front desk to schedule appointments."
  },
  {
    id: 9,
    question: "What dining options are available?",
    answer: "We offer authentic Sri Lankan cuisine, continental breakfast options, and can arrange special dining experiences. Room service is also available during specified hours."
  },
  {
    id: 10,
    question: "What is your cancellation policy?",
    answer: "Cancellations and modifications can be made up to 48 hours before your arrival date without penalty. Please contact us directly to discuss your specific situation."
  },
  {
    id: 11,
    question: "Are pets allowed?",
    answer: "We welcome well-behaved pets with prior approval. Please inform us during booking about your pet, and additional fees may apply for cleaning and maintenance."
  },
  {
    id: 12,
    question: "What attractions are nearby?",
    answer: "We are conveniently located near major Kandy attractions including the Temple of the Tooth, Kandy Lake, Royal Botanic Gardens, and various cultural sites. Our staff can help arrange tours and transportation."
  }
];
