import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/forms/BookingForm';
import { reservationPageContent, reservationFormFields } from '@/data/reservation/reservationData';

export default function ReservationPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F6EF' }}>
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ color: '#B8860B' }}>
            {reservationPageContent.title}
          </h1>
        </div>

        <BookingForm formFields={reservationFormFields} pageContent={reservationPageContent} />
        </main>
      
      <Footer />
    </div>
  );
}
