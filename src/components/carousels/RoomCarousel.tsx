"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Room, RoomLabels, amenityIcons, amenityLabels, specificationIcons, specificationLabels } from '@/data/rooms/roomsData';
import { useRoomSelection } from '@/contexts/RoomSelectionContext';
import { motion, AnimatePresence } from 'framer-motion';

interface RoomCarouselProps {
  rooms: Room[];
  labels: RoomLabels;
}

export default function RoomCarousel({ rooms, labels }: RoomCarouselProps) {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addRoom, removeRoom, isRoomSelected } = useRoomSelection();

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length);
    setCurrentImageIndex(0); // Reset image index when changing rooms
  };

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
    setCurrentImageIndex(0); // Reset image index when changing rooms
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const room = rooms[currentRoom];

  const handleRoomSelection = () => {
    if (isRoomSelected(room.id)) {
      removeRoom(room.id);
    } else {
      addRoom(room.id);
    }
  };

  return (
    <>
      {/* Room Gallery Section */}
      <section className="mb-8">
        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-4 md:gap-8">
          {/* Main Room Image - Responsive Height */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.images[0]}
                className="relative w-full h-[500px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={room.images[0]}
                  alt={`${room.name} main view`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Secondary Images - Responsive Heights */}
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.images[1]}
                className="relative w-full h-60 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={room.images[1]}
                  alt={`${room.name} bedroom`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={room.images[2]}
                className="relative w-full h-60 rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={room.images[2]}
                  alt={`${room.name} bathroom`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Image Carousel */}
        <div className="lg:hidden relative">
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${room.id}-${currentImageIndex}`}
                className="relative w-full h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={room.images[currentImageIndex]}
                  alt={`${room.name} image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label={labels.previousImage}
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label={labels.nextImage}
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Dots Indicator */}
          <div className="flex justify-center gap-2 mt-3">
            {room.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-[#B09244] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Room Carousel with Outer Box */}
      <section className="mb-8">
        <motion.div 
          className="rounded-xl p-4 md:p-6 relative z-10"
          style={{ backgroundColor: '#B092441A' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Navigation Arrows - Responsive Layout */}
          <div className="flex flex-row items-center justify-between mb-0 gap-2 sm:gap-4 overflow-x-auto">
            <motion.button 
              onClick={prevRoom}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors z-10 min-w-[40px]"
              aria-label={labels.previousRoom}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Inner White Room Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={room.id}
                className="flex-1 mx-2 sm:mx-6 min-w-0"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                    {/* Left Side - Room Info */}
                    <div className="flex-1 w-full mb-6 md:mb-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{room.type}</h2>
                      <p className="text-base sm:text-lg text-gray-600 mb-3">{room.name}</p>
                      
                      {/* New Room Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-gray-500 min-w-[100px]">Capacity:</span>
                          <span className="text-sm text-gray-700">{room.capacity}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-gray-500 min-w-[100px]">View:</span>
                          <span className="text-sm text-gray-700">{room.view}</span>
                        </div>
                      </div>
                      
                      <div className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#B09244' }}>
                        ${room.price} <span className="text-base sm:text-lg font-normal text-gray-600">{labels.perDay}</span>
                      </div>
                      {/* Select Room Button */}
                      <motion.button 
                        onClick={handleRoomSelection}
                        className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 font-medium rounded-lg transition-all text-sm sm:text-base ${
                          isRoomSelected(room.id) 
                            ? 'bg-green-600 text-white' 
                            : 'text-white hover:opacity-90'
                        }`}
                        style={{ 
                          backgroundColor: isRoomSelected(room.id) ? '#16a34a' : '#B09244' 
                        }}
                        whileTap={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {isRoomSelected(room.id) ? labels.roomSelected : labels.selectThisRoom}
                      </motion.button>
                    </div>

                    {/* Right Side - Amenities & Specifications with Icons */}
                    <div className="flex-1 w-full max-w-md">
                      <h3 className="text-base font-semibold text-gray-700 mb-4">{labels.roomFeatures}</h3>
                      
                      {/* Amenities Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                        {Object.entries(room.amenities).map(([key, value]) => {
                          if (!value) return null; // Only show amenities that are true
                          return (
                            <div 
                              key={key}
                              className="flex flex-col items-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <div className="w-10 h-10 mb-1.5 flex items-center justify-center bg-white rounded-full shadow-sm">
                                <i
                                  className={`${amenityIcons[key as keyof typeof amenityIcons]} text-xl text-gray-700`}
                                />
                              </div>
                              <div className="text-xs text-gray-600 text-center leading-tight">{amenityLabels[key]}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Specifications Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {Object.entries(room.specifications).map(([key, value]) => {
                          if (!value) return null; // Only show specifications that are true
                          return (
                            <div 
                              key={key}
                              className="flex flex-col items-center p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                            >
                              <div className="w-10 h-10 mb-1.5 flex items-center justify-center bg-white rounded-full shadow-sm">
                                <i
                                  className={`${specificationIcons[key as keyof typeof specificationIcons]} text-xl text-gray-700`}
                                />
                              </div>
                              <div className="text-xs text-gray-600 text-center leading-tight">{specificationLabels[key]}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Selected indicator if room is selected */}
                  {isRoomSelected(room.id) && (
                    <div className="mt-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full">
                        {labels.selected}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button 
              onClick={nextRoom}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors z-10 min-w-[40px]"
              aria-label={labels.nextRoom}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
