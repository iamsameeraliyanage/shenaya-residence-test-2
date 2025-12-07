"use client";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { kandyDestinations as kandyDestinationsEN } from '@/data/destinations/kandyDestinations';
import { kandyDestinations as kandyDestinationsDE } from '@/data/destinations/kandyDestinations.de';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function DestinationsSection() {
  const locale = useLocale();
  const kandyDestinations = locale === 'de' ? kandyDestinationsDE : kandyDestinationsEN;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % kandyDestinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + kandyDestinations.length) % kandyDestinations.length);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
      {/* Section Title */}
      <motion.div
        className="text-center mb-6 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary px-2"
        >
          Best Destinations in Kandy
        </h2>
      </motion.div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 lg:grid-rows-3 auto-rows-fr" style={{ gridTemplateRows: 'repeat(3, 200px)' }}>
          {kandyDestinations.map((destination, idx) => (
            <motion.div
              key={destination.id}
              className={destination.gridClass}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
            >
              <div 
                className="relative overflow-hidden shadow-xl h-full group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                style={{ borderRadius: '24px' }}
              >
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 ${
                    destination.gridClass.includes('row-span-2') ? 'p-4 sm:p-6 lg:p-8' : 'p-3 sm:p-4 lg:p-6'
                  } text-white`}
                  whileHover={{ y: -16 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <h3 className={`font-bold leading-tight ${
                    destination.gridClass.includes('row-span-2') 
                      ? 'text-lg sm:text-xl lg:text-3xl mb-2 sm:mb-3' 
                      : 'text-base sm:text-lg lg:text-xl mb-1.5 sm:mb-2'
                  }`}>
                    {destination.name}
                  </h3>
                  {destination.subtitle && (
                    <p className={`mb-2 sm:mb-3 opacity-90 font-medium ${
                      destination.gridClass.includes('row-span-2') 
                        ? 'text-sm sm:text-base lg:text-lg' 
                        : 'text-xs sm:text-sm'
                    }`}>
                      {destination.subtitle}
                    </p>
                  )}
                  <p className={`opacity-85 leading-relaxed ${
                    destination.gridClass.includes('row-span-2') 
                      ? 'text-xs sm:text-sm lg:text-base' 
                      : 'text-xs lg:text-sm'
                  }`}>
                    {destination.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <div className="relative">
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={kandyDestinations[currentIndex].image}
                  alt={kandyDestinations[currentIndex].imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
                    {kandyDestinations[currentIndex].name}
                  </h3>
                  {kandyDestinations[currentIndex].subtitle && (
                    <p className="text-sm sm:text-base mb-2 opacity-90 font-medium">
                      {kandyDestinations[currentIndex].subtitle}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
                    {kandyDestinations[currentIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Previous destination"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Next destination"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {kandyDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
