"use client";
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  diningHeroSection as diningHeroSectionEN,
  diningDeliciousMealSection as diningDeliciousMealSectionEN,
  diningDecorativeSection as diningDecorativeSectionEN,
  chefInfo as chefInfoEN
} from '@/data/dining/diningContent';
import {
  diningHeroSection as diningHeroSectionDE,
  diningDeliciousMealSection as diningDeliciousMealSectionDE,
  diningDecorativeSection as diningDecorativeSectionDE,
  chefInfo as chefInfoDE
} from '@/data/dining/diningContent.de';

export default function DiningPage() {
  const locale = useLocale();
  const diningHeroSection = locale === 'de' ? diningHeroSectionDE : diningHeroSectionEN;
  const diningDeliciousMealSection = locale === 'de' ? diningDeliciousMealSectionDE : diningDeliciousMealSectionEN;
  const diningDecorativeSection = locale === 'de' ? diningDecorativeSectionDE : diningDecorativeSectionEN;
  const chefInfo = locale === 'de' ? chefInfoDE : chefInfoEN;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F6F6EF' }}>
      <Header />

      <main>
        {/* Hero Section */}
          <div className="relative min-h-screen" style={{ backgroundColor: '#B09244' }}>
            <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[60vh] md:min-h-[80vh]">

              {/* Left Side - Text Content */}
              <div className="text-white pt-8 lg:pt-8 md:pt-6 sm:pt-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
                  >
                    {diningHeroSection.title.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < diningHeroSection.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="text-base sm:text-lg mb-8 sm:mb-12 text-white/90 leading-relaxed"
                  >
                    {diningHeroSection.description.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < diningHeroSection.description.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </motion.p>

                {/* "Scroll" text */}
                <div className="hidden md:block absolute -left-12 top-[75%] transform -translate-y-1/2 rotate-90 origin-center">
                  <div className="flex items-center gap-4">
                    <span className="text-white text-base md:text-lg tracking-[0.3em] uppercase font-bold">
                      Scroll
                    </span>
                    <div
                      className="w-24 md:w-32 h-0.5 opacity-80"
                      style={{
                        borderTop: '2px dashed white',
                        borderImageSource: 'repeating-linear-gradient(to right, white 0, white 8px, transparent 8px, transparent 16px)',
                        borderImageSlice: 1
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Food Image */}
              <div className="relative mt-8 lg:mt-0">
                <div className="relative w-full h-64 sm:h-96 md:h-[600px] lg:h-[900px] rounded-2xl lg:rounded-3xl overflow-hidden">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={diningHeroSection.image}
                      alt={diningHeroSection.imageAlt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>

                {/* Spice images */}
                <div
                  className="absolute flex items-center gap-4 sm:gap-8 md:gap-10 z-20 left-1/2 lg:left-[2%] bottom-[-60px] sm:bottom-[-80px] transform -translate-x-1/2 lg:translate-x-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="rounded-full overflow-hidden bg-white border-4 border-white shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  >
                    <Image src="/images/dining/spies1.png" alt="Spice 1" width={192} height={192} className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="rounded-full overflow-hidden bg-white border-4 border-white shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  >
                    <Image src="/images/dining/spies2.png" alt="Spice 2" width={192} height={192} className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="rounded-full overflow-hidden bg-white border-4 border-white shadow-lg w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  >
                    <Image src="/images/dining/spies3.png" alt="Spice 3" width={192} height={192} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="py-10 sm:py-16 relative" style={{ backgroundColor: '#B09244' }}>
          <div className="container mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Side - Main Meal Image */}
              <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-0">
                <div className="flex flex-col w-full md:w-3/5">
                  <div className="relative h-48 sm:h-64 md:h-[400px] lg:h-[500px] w-full md:w-[350px] lg:w-[700px] rounded-xl lg:rounded-2xl overflow-hidden ml-auto">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={diningDeliciousMealSection.image}
                        alt={diningDeliciousMealSection.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-left">
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white"
                    >
                      Let’s enjoy the delicious meal
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-base sm:text-lg text-white/90"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Decorative Image + Text - moves to right corner on large screens */}
              <div className="flex flex-col items-center md:items-start w-full md:w-2/5 mt-8 md:mt-0 lg:absolute lg:top-0 lg:right-0 lg:w-[400px] xl:w-[500px] lg:mt-14 xl:mt-18">
                {/* NEW TEXT ABOVE IMAGE */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-white text-base sm:text-lg mb-2 sm:mb-4 w-full sm:w-[350px] leading-relaxed lg:w-auto"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                </motion.p>

                {/* Decorative Image */}
                <div className="relative h-48 sm:h-64 md:h-[400px] lg:h-[500px] w-full sm:w-[250px] md:w-[200px] lg:w-[350px] xl:w-[400px] overflow-hidden rounded-xl lg:rounded-[24px]">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={diningDecorativeSection.image}
                      alt={diningDecorativeSection.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="py-10 sm:py-16" style={{ backgroundColor: '#F6F6EF' }}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Chef Photo */}
              <div className="relative flex justify-center mb-8 lg:mb-0">
                <div className="relative w-40 h-56 sm:w-56 sm:h-80 md:w-[220px] md:h-[320px] lg:w-[300px] lg:h-[400px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={chefInfo.image}
                        alt={chefInfo.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="absolute -top-6 -right-6 w-10 h-10 sm:w-20 sm:h-20 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="20" cy="20" r="3" fill="currentColor" />
                      <circle cx="50" cy="10" r="2" fill="currentColor" />
                      <circle cx="80" cy="25" r="2.5" fill="currentColor" />
                      <circle cx="30" cy="50" r="2" fill="currentColor" />
                      <circle cx="70" cy="60" r="3" fill="currentColor" />
                      <circle cx="15" cy="80" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Chef Text */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6"
                >
                  {chefInfo.title.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < chefInfo.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                >
                  {chefInfo.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < chefInfo.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </motion.p>
              </div>

            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
