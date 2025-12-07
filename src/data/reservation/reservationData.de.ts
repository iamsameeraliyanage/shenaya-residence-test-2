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
  roomSelector: {
    title: string;
    selectRoomsLabel: string;
    numberOfGuestsLabel: string;
    selectRoomsPlaceholder: string;
    numberOfGuestsPlaceholder: string;
    roomSelected: string;
    roomsSelected: string;
    selectedRoomsTitle: string;
    totalPerNight: string;
  };
}

export const reservationPageContent: ReservationPageContent = {
  title: 'Reservierung vornehmen',
  sections: {
    booking: 'Buchungsformular',
    contact: 'Kontaktinformationen', 
    special: 'Besondere Wünsche'
  },
  submitButton: 'Reservierung abschließen',
  roomSelector: {
    title: 'Zimmer & Gäste auswählen',
    selectRoomsLabel: 'Zimmer auswählen',
    numberOfGuestsLabel: 'Anzahl der Gäste',
    selectRoomsPlaceholder: 'Zimmer auswählen',
    numberOfGuestsPlaceholder: 'Anzahl der Gäste auswählen',
    roomSelected: 'Zimmer ausgewählt',
    roomsSelected: 'Zimmer ausgewählt',
    selectedRoomsTitle: 'Ausgewählte Zimmer:',
    totalPerNight: 'Gesamt pro Nacht:'
  }
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
    name: 'Zimmer 1',
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-2',
    name: 'Zimmer 2', 
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-3',
    name: 'Zimmer 3',
    type: 'Doppelzimmer', 
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-4',
    name: 'Zimmer 4',
    type: 'Doppelzimmer',
    price: 85, 
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-5',
    name: 'Zimmer 5',
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar', 
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-6',
    name: 'Zimmer 6',
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-7',
    name: 'Zimmer 7',
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  },
  {
    id: 'room-8',
    name: 'Zimmer 8', 
    type: 'Doppelzimmer',
    price: 85,
    maxOccupancy: '1 Person / Paar',
    amenities: ['Doppelbett', 'Kühlschrank verfügbar', 'Meerblick', 'Klimaanlage, WLAN verfügbar']
  }
];

export const roomTypes = [
  { value: '', label: 'Zimmertyp auswählen' },
  { value: 'deluxe', label: 'Deluxe-Zimmer' },
  { value: 'suite', label: 'Suite' },
  { value: 'family', label: 'Familienzimmer' },
  { value: 'standard', label: 'Standard-Zimmer' }
];

export const guestOptions = [
  { value: '', label: 'Anzahl der Gäste auswählen' },
  { value: '1', label: '1 Gast' },
  { value: '2', label: '2 Gäste' },
  { value: '3', label: '3 Gäste' },
  { value: '4', label: '4 Gäste' },
  { value: '5', label: '5+ Gäste' }
];

export const dateOptions = [
  { value: '', label: 'Check-in Tag auswählen' },
  { value: '2024-01-01', label: '1. Januar 2024' },
  { value: '2024-01-02', label: '2. Januar 2024' },
  { value: '2024-01-03', label: '3. Januar 2024' }
];

export const checkoutDateOptions = [
  { value: '', label: 'Check-out Datum auswählen' },
  { value: '2024-01-02', label: '2. Januar 2024' },
  { value: '2024-01-03', label: '3. Januar 2024' },
  { value: '2024-01-04', label: '4. Januar 2024' }
];

export const reservationFormFields: ReservationFormField[] = [
  {
    id: 'checkInDate',
    name: 'checkInDate',
    label: 'Check-in Datum',
    type: 'date',
    placeholder: 'Check-in Datum auswählen',
    required: true
  },
  {
    id: 'checkOutDate', 
    name: 'checkOutDate',
    label: 'Check-out Datum',
    type: 'date',
    placeholder: 'Check-out Datum auswählen',
    required: true
  },
  {
    id: 'firstName',
    name: 'firstName',
    label: 'Vorname',
    type: 'text',
    placeholder: 'Vorname eingeben',
    required: true
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Nachname',
    type: 'text',
    placeholder: 'Nachname eingeben',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'E-Mail-Adresse',
    type: 'email',
    placeholder: 'E-Mail-Adresse eingeben',
    required: true
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Telefonnummer',
    type: 'tel',
    placeholder: 'Telefonnummer eingeben',
    required: true
  },
  {
    id: 'additionalNote',
    name: 'additionalNote',
    label: 'Zusätzliche Anmerkung',
    type: 'textarea',
    placeholder: 'Besondere Wünsche oder Ernährungsanforderungen',
    required: false,
    rows: 4
  }
];
