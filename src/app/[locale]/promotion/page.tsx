"use client";
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { promotions as promotionsEN, promotionsPageContent as promotionsPageContentEN } from '@/data/promotions/promotionsData';
import { promotions as promotionsDE, promotionsPageContent as promotionsPageContentDE } from '@/data/promotions/promotionsData.de';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PromotionPage() {
  const locale = useLocale();
  const promotions = locale === 'de' ? promotionsDE : promotionsEN;
  const promotionsPageContent = locale === 'de' ? promotionsPageContentDE : promotionsPageContentEN;
  const [expandedPromotionId, setExpandedPromotionId] = useState<string | null>(null);
  const [showContactId, setShowContactId] = useState<string | null>(null);
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  const nextPromotion = () => {
    setCurrentPromotionIndex((prev) => (prev + 1) % promotions.length);
  };

  const prevPromotion = () => {
    setCurrentPromotionIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="min-h-screen bg-[#F6F6EF]">

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
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        {/* Page Title */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4"
            style={{ color: '#B09244' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {promotionsPageContent.title}
          </motion.h1>
        </motion.div>

        {/* Mobile: Carousel View */}
        <div className="lg:hidden mb-8 px-2">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPromotionIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-lg p-4 sm:p-6"
              >
                {(() => {
                  const promotion = promotions[currentPromotionIndex];
                  return (
                    <>
                      {/* Image First on Mobile */}
                      <div className="w-full mb-4 sm:mb-6">
                        <div className="relative w-full h-56 sm:h-72">
                          <Image
                            src={promotion.image.src}
                            alt={promotion.image.alt}
                            fill
                            className="object-cover rounded-xl sm:rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full">
                        <h3 className="text-sm sm:text-base font-medium text-gray-600 mb-1 sm:mb-2">
                          {promotion.title}
                        </h3>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                          {promotion.discount}
                        </h2>
                        <p className="text-gray-600 mb-1 sm:mb-2 text-xs sm:text-sm">
                          {promotion.validUntil}
                        </p>
                        <p
                          className="mb-3 sm:mb-4 cursor-pointer hover:underline text-xs sm:text-sm text-[#B09244]"
                          onClick={() => setExpandedPromotionId(expandedPromotionId === promotion.id ? null : promotion.id)}
                        >
                          {promotion.description}
                        </p>
                        {expandedPromotionId === promotion.id && promotion.additionalDetails && (
                          <motion.div
                            className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 text-[#B09244] text-xs sm:text-sm"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {promotion.additionalDetails}
                          </motion.div>
                        )}
                        <button
                          className="text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition-opacity font-medium text-xs sm:text-sm w-full sm:w-auto"
                          style={{ backgroundColor: '#B09244' }}
                          onClick={() => setShowContactId(showContactId === promotion.id ? null : promotion.id)}
                        >
                          {promotion.buttonText}
                        </button>
                        {showContactId === promotion.id && (
                          <motion.div
                            className="mt-3 sm:mt-4 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl text-gray-700 text-xs sm:text-sm"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <div className="font-semibold mb-2">Contact to Book:</div>
                            <div><span className="font-bold">PHONE</span><br />+94 (0)81 2222962</div>
                            <div className="mt-2"><span className="font-bold">EMAIL</span><br />info@shenayaresidence.com</div>
                          </motion.div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Below Card */}
          {promotions.length > 1 && (
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={prevPromotion}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-colors border border-gray-200"
                aria-label="Previous promotion"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextPromotion}
                className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-colors border border-gray-200"
                aria-label="Next promotion"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-14 lg:mb-16">
            {promotions.map((promotion, idx) => (
              <motion.div
                key={promotion.id}
                className="bg-white rounded-[2.5rem] shadow-lg p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 md:gap-8"
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', stiffness: 80, damping: 18 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(176,146,68,0.15)' }}
              >
                <div className="w-full lg:w-1/2">
                  <div className="text-left w-full">
                    <h3 className="text-base md:text-lg font-medium text-gray-600 mb-1 md:mb-2">
                      {promotion.title}
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
                      {promotion.discount}
                    </h2>
                    <p className="text-gray-600 mb-1 md:mb-2 text-sm md:text-base">
                      {promotion.validUntil}
                    </p>
                    <p
                      className="mb-4 md:mb-6 cursor-pointer hover:underline text-sm md:text-base text-[#B09244]"
                      onClick={() => setExpandedPromotionId(expandedPromotionId === promotion.id ? null : promotion.id)}
                    >
                      {promotion.description}
                    </p>
                    {expandedPromotionId === promotion.id && promotion.additionalDetails && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 md:p-4 mb-3 md:mb-4 text-[#B09244] text-sm md:text-base">
                        {promotion.additionalDetails}
                      </div>
                    )}
                    <button
                      className="text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
                      style={{ backgroundColor: '#B09244' }}
                      onClick={() => setShowContactId(showContactId === promotion.id ? null : promotion.id)}
                    >
                      {promotion.buttonText}
                    </button>
                    {showContactId === promotion.id && (
                      <div className="mt-3 md:mt-4 p-3 md:p-4 bg-amber-50 border border-amber-200 rounded-xl text-gray-700 text-sm md:text-base">
                        <div className="font-semibold mb-2">Contact to Book:</div>
                        <div><span className="font-bold">PHONE</span><br />+94 (0)81 2222962</div>
                        <div className="mt-2"><span className="font-bold">EMAIL</span><br />info@shenayaresidence.com</div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src={promotion.image.src}
                      alt={promotion.image.alt}
                      fill
                      className="object-cover rounded-[2.5rem]"
                      sizes="(max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
