"use client";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { kandyDestinations as kandyDestinationsEN } from '@/data/destinations/kandyDestinations';
import { kandyDestinations as kandyDestinationsDE } from '@/data/destinations/kandyDestinations.de';
import { motion } from 'framer-motion';

export default function DestinationsSection() {
  const locale = useLocale();
  const kandyDestinations = locale === 'de' ? kandyDestinationsDE : kandyDestinationsEN;
  return (
    <section className="container mx-auto px-6 py-16 relative z-10">
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-primary"
        >
          Best Destinations in Kandy
        </h2>
      </motion.div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:grid-rows-3 auto-rows-fr" style={{ gridTemplateRows: 'repeat(3, 200px)' }}>
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
                    destination.gridClass.includes('row-span-2') ? 'p-6 lg:p-8' : 'p-4 lg:p-6'
                  } text-white`}
                  whileHover={{ y: -16 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <h3 className={`font-bold leading-tight ${
                    destination.gridClass.includes('row-span-2') 
                      ? 'text-xl lg:text-3xl mb-3' 
                      : 'text-lg lg:text-xl mb-2'
                  }`}>
                    {destination.name}
                  </h3>
                  {destination.subtitle && (
                    <p className={`mb-3 opacity-90 font-medium ${
                      destination.gridClass.includes('row-span-2') 
                        ? 'text-base lg:text-lg' 
                        : 'text-sm'
                    }`}>
                      {destination.subtitle}
                    </p>
                  )}
                  <p className={`opacity-85 leading-relaxed ${
                    destination.gridClass.includes('row-span-2') 
                      ? 'text-sm lg:text-base' 
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
    </section>
  );
}
