"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { roomsSection as roomsSectionEN } from "@/data/homepage/homepageContent";
import { roomsSection as roomsSectionDE } from "@/data/homepage/homepageContent.de";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RoomsSection() {
  const locale = useLocale();
  const roomsSection = locale === "de" ? roomsSectionDE : roomsSectionEN;
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [roomsSection.largeRoom, roomsSection.roomArea, roomsSection.bedroom];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary px-2">
            {roomsSection.title}
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row gap-8 max-w-7xl mx-auto">
          {/* Left - Large Room Image */}
          <motion.div
            className="relative w-[600px] h-[700px] rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={roomsSection.largeRoom.src}
              alt={roomsSection.largeRoom.alt}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Top Right Room Image - Sitting Area */}
            <motion.div
              className="relative w-full h-[340px] rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src={roomsSection.roomArea.src}
                alt={roomsSection.roomArea.alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text Section and Bedroom Image - Side by Side */}
            <div className="flex flex-row gap-6">
              {/* Text Section */}
              <motion.div
                className="flex-1 flex flex-col justify-center p-6 bg-cream rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-gray-800 text-md leading-relaxed mb-6">
                  {roomsSection.textContent.description}
                </p>
                <motion.button
                  className="text-black bg-light-gray hover:opacity-90 transition-opacity font-medium py-3 px-6 rounded-lg w-auto"
                  onClick={() => router.push("/reservation")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  {roomsSection.textContent.buttonText}
                </motion.button>
              </motion.div>

              {/* Bottom Right Room Image - Bedroom */}
              <motion.div
                className="relative flex-1 h-[333px] rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Image
                  src={roomsSection.bedroom.src}
                  alt={roomsSection.bedroom.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout with Carousel */}
        <div className="lg:hidden">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Section */}
          <motion.div
            className="p-4 sm:p-6 bg-cream rounded-2xl shadow-lg text-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
              {roomsSection.textContent.description}
            </p>
            <motion.button
              className="text-black bg-light-gray hover:opacity-90 transition-opacity font-medium py-2.5 px-6 rounded-lg w-full sm:w-auto text-sm sm:text-base"
              onClick={() => router.push("/reservation")}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
              whileTap={{ scale: 1.1 }}
            >
              {roomsSection.textContent.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>
  );
}
