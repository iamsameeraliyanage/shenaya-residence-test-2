"use client";
import { useState } from "react";
import Image from "next/image";
import { rooms, amenityIcons } from "@/data/rooms/roomsData";
import { useRoomSelection } from "@/contexts/RoomSelectionContext";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomCarousel() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const { addRoom, removeRoom, isRoomSelected } = useRoomSelection();

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length);
  };

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Main Room Image - Responsive Height */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.images[0]}
                className="relative w-full h-60 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
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
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.images[1]}
                className="relative w-full h-40 sm:h-48 md:h-60 rounded-lg overflow-hidden"
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
                className="relative w-full h-40 sm:h-48 md:h-60 rounded-lg overflow-hidden"
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
      </section>

      {/* Room Carousel with Outer Box */}
      <section className="mb-8">
        <motion.div
          className="rounded-xl p-4 md:p-6 relative"
          style={{ backgroundColor: "#B092441A" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Navigation Arrows - Responsive Layout */}
          <div className="flex flex-row items-center justify-between mb-0 gap-2 sm:gap-4 overflow-x-auto">
            <motion.button
              onClick={prevRoom}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors z-10 min-w-[40px]"
              aria-label="Previous room"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 1.1 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
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
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                        {room.name}
                      </h2>
                      <div
                        className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12"
                        style={{ color: "#B09244" }}
                      >
                        ${room.price}{" "}
                        <span className="text-base sm:text-lg font-normal text-gray-600">
                          per Day
                        </span>
                      </div>
                      {/* Select Room Button */}
                      <motion.button
                        onClick={handleRoomSelection}
                        className={`w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 font-medium rounded-lg transition-all text-sm sm:text-base ${
                          isRoomSelected(room.id)
                            ? "bg-green-600 text-white"
                            : "text-white hover:opacity-90"
                        }`}
                        style={{
                          backgroundColor: isRoomSelected(room.id)
                            ? "#16a34a"
                            : "#B09244",
                        }}
                        whileTap={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {isRoomSelected(room.id)
                          ? "Room Selected ✓"
                          : "Select this Room"}
                      </motion.button>
                    </div>

                    {/* Right Side - Amenities Grid */}
                    <div className="flex-1 w-full max-w-md">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Row 1 */}
                        {room.specifications.bedrooms && (
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                              <Image
                                src={amenityIcons.bedrooms}
                                alt="Bedroom"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-base sm:text-lg font-bold text-gray-800">
                              {room.specifications.bedrooms}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              bedroom
                              {room.specifications.bedrooms !== 1 ? "s" : ""}
                            </div>
                          </div>
                        )}

                        {room.specifications.livingRooms && (
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                              <Image
                                src={amenityIcons.livingRooms}
                                alt="Living Room"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-base sm:text-lg font-bold text-gray-800">
                              {room.specifications.livingRooms}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              living room
                              {room.specifications.livingRooms !== 1 ? "s" : ""}
                            </div>
                          </div>
                        )}

                        {room.specifications.bathrooms && (
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                              <Image
                                src={amenityIcons.bathrooms}
                                alt="Bathroom"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-base sm:text-lg font-bold text-gray-800">
                              {room.specifications.bathrooms}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              bathroom
                              {room.specifications.bathrooms !== 1 ? "s" : ""}
                            </div>
                          </div>
                        )}

                        {/* Row 2 */}
                        {room.specifications.unitsReady && (
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                              <Image
                                src={amenityIcons.unitsReady}
                                alt="Unit Ready"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-base sm:text-lg font-bold text-gray-800">
                              {room.specifications.unitsReady}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              unit ready
                            </div>
                          </div>
                        )}

                        {room.specifications.televisions && (
                          <div className="text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 flex items-center justify-center">
                              <Image
                                src={amenityIcons.televisions}
                                alt="Television"
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-base sm:text-lg font-bold text-gray-800">
                              {room.specifications.televisions}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              television
                              {room.specifications.televisions !== 1 ? "s" : ""}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Selected indicator if room is selected */}
                  {isRoomSelected(room.id) && (
                    <div className="mt-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full">
                        Selected ✓
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={nextRoom}
              className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors z-10 min-w-[40px]"
              aria-label="Next room"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 1.1 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
