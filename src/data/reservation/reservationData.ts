export interface ReservationFormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'date';
  placeholder: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
}

export interface ReservationPageContent {
  title: string;
  sections: {
    booking: string;
    contact: string;
    special: string;
  };
  submitButton: string;
}

export const reservationPageContent: ReservationPageContent = {
  title: 'Make A Reservation',
  sections: {
    booking: 'Booking Form',
    contact: 'Contact Information', 
    special: 'Special Requests'
  },
  submitButton: 'Complete Reservation'
};

export interface RoomOption {
  id: string;
  name: string;
  type: string;
  price: number;
  maxOccupancy: string;
  amenities: string[];
  images?: string[];
}

export const availableRooms: RoomOption[] = [
  {
    id: 'room-1',
    name: 'Room 1',
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-2',
    name: 'Room 2', 
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-3',
    name: 'Room 3',
    type: 'Double room', 
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-4',
    name: 'Room 4',
    type: 'Double room',
    price: 85, 
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-5',
    name: 'Room 5',
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple', 
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-6',
    name: 'Room 6',
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-7',
    name: 'Room 7',
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  },
  {
    id: 'room-8',
    name: 'Room 8', 
    type: 'Double room',
    price: 85,
    maxOccupancy: '1 person / Couple',
    amenities: ['Double Size Bed', 'Fridge Available', 'Sea View', 'A/C, Wifi Available']
  }
];

export const roomTypes = [
  { value: '', label: 'Select Room type' },
  { value: 'deluxe', label: 'Deluxe Room' },
  { value: 'suite', label: 'Suite' },
  { value: 'family', label: 'Family Room' },
  { value: 'standard', label: 'Standard Room' }
];

export const guestOptions = [
  { value: '', label: 'Select number of guests' },
  { value: '1', label: '1 Guest' },
  { value: '2', label: '2 Guests' },
  { value: '3', label: '3 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '5', label: '5+ Guests' }
];

export const dateOptions = [
  { value: '', label: 'Select the check in day' },
  { value: '2024-01-01', label: 'January 1, 2024' },
  { value: '2024-01-02', label: 'January 2, 2024' },
  { value: '2024-01-03', label: 'January 3, 2024' }
];

export const checkoutDateOptions = [
  { value: '', label: 'Select the check out date' },
  { value: '2024-01-02', label: 'January 2, 2024' },
  { value: '2024-01-03', label: 'January 3, 2024' },
  { value: '2024-01-04', label: 'January 4, 2024' }
];

export const reservationFormFields: ReservationFormField[] = [
  {
    id: 'checkInDate',
    name: 'checkInDate',
    label: 'Check in Date',
    type: 'date',
    placeholder: 'Select check-in date',
    required: true
  },
  {
    id: 'checkOutDate', 
    name: 'checkOutDate',
    label: 'Check out Date',
    type: 'date',
    placeholder: 'Select check-out date',
    required: true
  },
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    placeholder: 'Type the first name',
    required: true
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Type the last name',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Type the email address',
    required: true
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: 'Type the phone number',
    required: true
  },
  {
    id: 'additionalNote',
    name: 'additionalNote',
    label: 'Additional Note',
    type: 'textarea',
    placeholder: 'Any special request or dietary requirement',
    required: false,
    rows: 4
  }
];
