"use client";
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RoomCarousel from '@/components/carousels/RoomCarousel';
import { useRoomSelection } from '@/contexts/RoomSelectionContext';
import { motion } from 'framer-motion';


export default function AccommodationPage() {
  const { selectedRooms } = useRoomSelection();

  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page Header Section */}
        <motion.section
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B8860B]">
            Our Accommodations
          </h1>
        </motion.section>

        {/* Room Carousel Section */}
        <motion.section
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <RoomCarousel />
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
                    ? "Browse through our 8 available rooms with preferred features."
                    : selectedRooms.length === 1
                    ? "You've selected 1 room with your preferred features."
                    : `You've selected ${selectedRooms.length} rooms with your preferred features.`
                  }
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {selectedRooms.length === 0
                    ? "Select your preferred rooms and continue to complete your reservation."
                    : "Review your selections and continue to complete your reservation."
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
                  Proceed to Reservation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
