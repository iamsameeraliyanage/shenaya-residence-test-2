"use client";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RoomCarousel from '@/components/carousels/RoomCarousel';
import { useRoomSelection } from '@/contexts/RoomSelectionContext';
import { motion } from 'framer-motion';
import { rooms as roomsEN, roomLabels as roomLabelsEN, accommodationPageContent as accommodationPageContentEN } from '@/data/rooms/roomsData';
import { rooms as roomsDE, roomLabels as roomLabelsDE, accommodationPageContent as accommodationPageContentDE } from '@/data/rooms/roomsData.de';


export default function AccommodationPage() {
  const locale = useLocale();
  const rooms = locale === 'de' ? roomsDE : roomsEN;
  const roomLabels = locale === 'de' ? roomLabelsDE : roomLabelsEN;
  const pageContent = locale === 'de' ? accommodationPageContentDE : accommodationPageContentEN;
  const { selectedRooms } = useRoomSelection();

  return (
    <div className="min-h-screen bg-[#F6F6EF] relative overflow-hidden">
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        {/* Page Header Section */}
        <motion.section
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B8860B]">
            {pageContent.title}
          </h1>
        </motion.section>

        {/* Room Carousel Section */}
        <motion.section
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <RoomCarousel rooms={rooms} labels={roomLabels} />
        </motion.section>

        {/* Room Selection Summary Section */}
        <motion.section
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className="rounded-lg p-4 sm:p-6 bg-[#B092441A]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#B8860B] mb-1 sm:mb-2">
                  {selectedRooms.length === 0
                    ? pageContent.browseMessage
                    : selectedRooms.length === 1
                    ? pageContent.oneRoomSelected
                    : pageContent.multipleRoomsSelected.replace('{count}', selectedRooms.length.toString())
                  }
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {selectedRooms.length === 0
                    ? pageContent.noRoomsInfo
                    : pageContent.reviewInfo
                  }
                </p>
              </div>
              <Link href="/reservation" className="w-full sm:w-auto">
                <motion.button
                  className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-lg transition-colors text-sm sm:text-base ${
                    selectedRooms.length > 0
                      ? 'bg-white text-gray-800 hover:bg-gray-50'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={selectedRooms.length === 0}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
                  whileTap={{ scale: 1.05 }}
                >
                  {pageContent.proceedButton}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer with proper z-index */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
