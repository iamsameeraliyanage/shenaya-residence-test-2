"use client";

import React from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ReviewCarousel from '@/components/carousels/ReviewCarousel';
import { motion } from 'framer-motion';
import { 
  reviews as reviewsEN, 
  reviewsPageContent as reviewsPageContentEN 
} from '@/data/reviews/reviewsData';
import { 
  reviews as reviewsDE, 
  reviewsPageContent as reviewsPageContentDE 
} from '@/data/reviews/reviewsData.de';

export default function ReviewsPage() {
  const locale = useLocale();
  const reviews = locale === 'de' ? reviewsDE : reviewsEN;
  const reviewsPageContent = locale === 'de' ? reviewsPageContentDE : reviewsPageContentEN;

  // Carousel state and handlers
  const [currentReview, setCurrentReview] = React.useState(0);
  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
      <div className="min-h-screen bg-[#F6F6EF]">
        <div className="relative overflow-hidden">
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
        
        <Header />
        <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          {/* Reviews Section */}
          <motion.div className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-16 items-stretch">
              {/* Left Side - Image and Rating */}
              <div className="h-64 sm:h-96 lg:h-full flex flex-col">
                <div className="relative w-full h-full rounded-lg overflow-hidden min-h-[16rem] sm:min-h-[24rem] lg:min-h-[32rem]">
                  <Image
                    src={reviewsPageContent.image.src}
                    alt={reviewsPageContent.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-4 sm:p-8">
                    <div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
                        {reviewsPageContent.title.split('\n').map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < reviewsPageContent.title.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </h1>
                      {/* Carousel navigation arrows */}
                      <div className="flex gap-2 mt-2">
                        <button 
                          type="button"
                          className="text-white text-2xl sm:text-3xl px-2 font-bold hover:text-amber-300 transition-colors bg-transparent border-none outline-none"
                          aria-label="Previous review"
                          onClick={prevReview}
                          style={{ boxShadow: 'none' }}
                        >
                          &lt;
                        </button>
                        <button 
                          type="button"
                          className="text-white text-2xl sm:text-3xl px-2 hover:text-amber-300 transition-colors bg-transparent border-none outline-none"
                          aria-label="Next review"
                          onClick={nextReview}
                          style={{ boxShadow: 'none' }}
                        >
                          &gt;
                        </button>
                      </div>
                    </div>
                    {/* Rating display */}
                    <div className="text-white mt-4 sm:mt-0">
                      <div className="text-4xl sm:text-6xl font-bold mb-1 sm:mb-2">{reviewsPageContent.overallRating}</div>
                      <div className="text-base sm:text-xl">{reviewsPageContent.totalReviews}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Side - Reviews */}
              <div className="h-full flex flex-col mt-8 lg:mt-0">
                <ReviewCarousel 
                  reviews={reviews} 
                  currentReview={currentReview}
                />
              </div>
            </div>
            {/* Call to Action - White Box */}
            <motion.div
              className="flex justify-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="bg-white rounded-xl shadow-md px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row items-center w-full"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 28 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-0 flex-1 text-center sm:text-left">{reviewsPageContent.callToAction.text}</h2>
                <span
                  className="text-amber-600 hover:text-amber-700 text-primary flex items-center gap-2 text-base sm:text-lg cursor-pointer sm:ml-8 whitespace-nowrap"
                  onClick={() => window.location.href = '/reservation'}
                >
                  {reviewsPageContent.callToAction.buttonText} <span className="text-xl sm:text-2xl">→</span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
        </div>
        <Footer />
      </div>
  );
}
