"use client";
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  calmEnvironmentSection as calmEnvironmentSectionEN,
  hikingSection as hikingSectionEN,
  natureWalksSection as natureWalksSectionEN,
  ayurvedicTreatmentsSection as ayurvedicTreatmentsSectionEN,
  culturalToursSection as culturalToursSectionEN
} from '@/data/discover/discoverContent';
import {
  calmEnvironmentSection as calmEnvironmentSectionDE,
  hikingSection as hikingSectionDE,
  natureWalksSection as natureWalksSectionDE,
  ayurvedicTreatmentsSection as ayurvedicTreatmentsSectionDE,
  culturalToursSection as culturalToursSectionDE
} from '@/data/discover/discoverContent.de';

// Mobile Carousel Component
function MobileCarousel({ images, currentIndex, setIndex }: { images: { src: string, alt: string }[], currentIndex: number, setIndex: (index: number) => void }) {
  return (
    <div className="relative mb-6">
      <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-lg">
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
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={() => setIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setIndex((currentIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
        aria-label="Next image"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-[#B09244] w-6' : 'bg-gray-300'
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  const locale = useLocale();

  const calmEnvironmentSection = locale === 'de' ? calmEnvironmentSectionDE : calmEnvironmentSectionEN;
  const hikingSection = locale === 'de' ? hikingSectionDE : hikingSectionEN;
  const natureWalksSection = locale === 'de' ? natureWalksSectionDE : natureWalksSectionEN;
  const ayurvedicTreatmentsSection = locale === 'de' ? ayurvedicTreatmentsSectionDE : ayurvedicTreatmentsSectionEN;
  const culturalToursSection = locale === 'de' ? culturalToursSectionDE : culturalToursSectionEN;

  const [calmEnvIndex, setCalmEnvIndex] = useState(0);
  const [hikingIndex, setHikingIndex] = useState(0);
  const [natureIndex, setNatureIndex] = useState(0);
  const [ayurvedicIndex, setAyurvedicIndex] = useState(0);
  const [culturalIndex, setCulturalIndex] = useState(0);

  const getCalmEnvImages = () => [
    { src: calmEnvironmentSection.image, alt: calmEnvironmentSection.imageAlt },
    {
      src: calmEnvironmentSection.additionalImages?.[0]?.src || '/images/home/garden.png',
      alt: calmEnvironmentSection.additionalImages?.[0]?.alt || 'Garden landscape view'
    }
  ];

  const getHikingImages = () => [
    { src: hikingSection.image, alt: hikingSection.imageAlt },
    {
      src: hikingSection.additionalImages?.[0]?.src || '/images/home/temple.jpg',
      alt: hikingSection.additionalImages?.[0]?.alt || 'Temple on hilltop'
    }
  ];

  const getNatureImages = () => [
    { src: natureWalksSection.image, alt: natureWalksSection.imageAlt },
    {
      src: natureWalksSection.additionalImages?.[0]?.src || '/images/home/staircase.jpg',
      alt: natureWalksSection.additionalImages?.[0]?.alt || 'Stone staircase in nature'
    }
  ];

  const getAyurvedicImages = () => [
    { src: ayurvedicTreatmentsSection.image, alt: ayurvedicTreatmentsSection.imageAlt },
    {
      src: ayurvedicTreatmentsSection.additionalImages?.[0]?.src || '/images/home/museum.jpg',
      alt: ayurvedicTreatmentsSection.additionalImages?.[0]?.alt || 'Traditional wellness setting'
    }
  ];

  const getCulturalImages = () => [
    { src: culturalToursSection.image, alt: culturalToursSection.imageAlt },
    {
      src: culturalToursSection.additionalImages?.[0]?.src || '/images/home/eventspace.jpg',
      alt: culturalToursSection.additionalImages?.[0]?.alt || 'Traditional cultural venue'
    }
  ];

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

      {/* Decorative Background Vector 2 */}
      <div className="absolute top-3/12 left-0 w-1/2 h-3/4 pointer-events-none z-0">
        <Image
          src="/images/home/Vector2.jpg"
          alt="Decorative background"
          fill
          className="object-contain object-left-top opacity-40 mix-blend-multiply"
          priority
          style={{ filter: 'brightness(1.1) contrast(0.9)' }}
        />
      </div>

      {/* Decorative Background Vector 3 */}
      <div className="absolute top-5/8 right-0 w-1/2 h-full pointer-events-none z-0">
        <Image
          src="/images/home/Vector3.jpg"
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

      <main className="relative z-10">
        {/* 1. Calm Environment Section */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Mobile: Carousel First */}
            <div className="md:hidden mb-6">
              <MobileCarousel images={getCalmEnvImages()} currentIndex={calmEnvIndex} setIndex={setCalmEnvIndex} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Desktop: Images Left */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image src={getCalmEnvImages()[0].src} alt={getCalmEnvImages()[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image src={getCalmEnvImages()[1].src} alt={getCalmEnvImages()[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                  {calmEnvironmentSection.title.split('\n').map((line, index) => (
                    <span key={index} style={{ color: '#B09244' }} className="block">{line}</span>
                  ))}
                </h1>
                <div className="space-y-4 md:space-y-6">
                  {calmEnvironmentSection.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed text-base md:text-lg">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. Hiking Section */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Mobile: Carousel First */}
            <div className="md:hidden mb-6">
              <MobileCarousel images={getHikingImages()} currentIndex={hikingIndex} setIndex={setHikingIndex} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Text Content */}
              <div className="md:pr-6 lg:pr-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {hikingSection.title.split('\n').map((line, index) => (
                    <span key={index} style={{ color: '#B09244' }} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{hikingSection.description}</p>
              </div>

              {/* Desktop: Images Right */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image src={getHikingImages()[0].src} alt={getHikingImages()[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image src={getHikingImages()[1].src} alt={getHikingImages()[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. Nature Walks Section */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
         
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Mobile: Carousel First */}
            <div className="md:hidden mb-6">
              <MobileCarousel images={getNatureImages()} currentIndex={natureIndex} setIndex={setNatureIndex} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Desktop: Images Left */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image src={getNatureImages()[0].src} alt={getNatureImages()[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image src={getNatureImages()[1].src} alt={getNatureImages()[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {natureWalksSection.title.split('\n').map((line, index) => (
                    <span key={index} style={{ color: '#B09244' }} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{natureWalksSection.description}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Ayurvedic Treatments Section */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Mobile: Carousel First */}
            <div className="md:hidden mb-6">
              <MobileCarousel images={getAyurvedicImages()} currentIndex={ayurvedicIndex} setIndex={setAyurvedicIndex} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Text Content */}
              <div className="md:pr-6 lg:pr-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {ayurvedicTreatmentsSection.title.split('\n').map((line, index) => (
                    <span key={index} style={{ color: '#B09244' }} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{ayurvedicTreatmentsSection.description}</p>
              </div>

              {/* Desktop: Images Right */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image src={getAyurvedicImages()[0].src} alt={getAyurvedicImages()[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image src={getAyurvedicImages()[1].src} alt={getAyurvedicImages()[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Cultural Tours Section */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Mobile: Carousel First */}
            <div className="md:hidden mb-6">
              <MobileCarousel images={getCulturalImages()} currentIndex={culturalIndex} setIndex={setCulturalIndex} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Desktop: Images Left */}
              <div className="hidden md:flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image src={getCulturalImages()[0].src} alt={getCulturalImages()[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image src={getCulturalImages()[1].src} alt={getCulturalImages()[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {culturalToursSection.title.split('\n').map((line, index) => (
                    <span key={index} style={{ color: '#B09244' }} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{culturalToursSection.description}</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer with proper z-index */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
