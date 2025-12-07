"use client";
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/forms/BookingForm';
import { reservationPageContent as reservationPageContentEN, reservationFormFields as reservationFormFieldsEN } from '@/data/reservation/reservationData';
import { reservationPageContent as reservationPageContentDE, reservationFormFields as reservationFormFieldsDE } from '@/data/reservation/reservationData.de';
import { rooms as roomsEN, roomLabels as roomLabelsEN } from '@/data/rooms/roomsData';
import { rooms as roomsDE, roomLabels as roomLabelsDE } from '@/data/rooms/roomsData.de';

export default function ReservationPage() {
  const locale = useLocale();
  const reservationPageContent = locale === 'de' ? reservationPageContentDE : reservationPageContentEN;
  const reservationFormFields = locale === 'de' ? reservationFormFieldsDE : reservationFormFieldsEN;
  const rooms = locale === 'de' ? roomsDE : roomsEN;
  const roomLabels = locale === 'de' ? roomLabelsDE : roomLabelsEN;

  return (
    <div className="min-h-screen relative bg-[#F6F6EF] overflow-hidden">
      {/* Decorative Background Vector 1 */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/images/home/Vector1.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-right-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Header with proper z-index */}
      <div className="relative z-10">
        <Header />
      </div>
      
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2" style={{ color: '#B09244' }}>
            {reservationPageContent.title}
          </h1>
        </div>

        <BookingForm formFields={reservationFormFields} pageContent={reservationPageContent} rooms={rooms} roomLabels={roomLabels} />
      </main>
      
      {/* Footer with proper z-index */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
