"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  company: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  currentReview: number;
}

export default function ReviewCarousel({ reviews, currentReview }: ReviewCarouselProps) {
  const [mobileCurrentReview, setMobileCurrentReview] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl sm:text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const nextMobileReview = () => {
    setMobileCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevMobileReview = () => {
    setMobileCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      {/* Mobile: Carousel View */}
      <div className="lg:hidden">
        <div className="relative px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileCurrentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-primary text-white p-6 sm:p-8 rounded-lg shadow-lg"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {renderStars(reviews[mobileCurrentReview].rating)}
              </div>
              {/* Review text */}
              <p className="mb-6 leading-relaxed text-sm sm:text-base">
                {reviews[mobileCurrentReview].text}
              </p>
              {/* Author info */}
              <div>
                <div className="font-semibold text-base sm:text-lg">{reviews[mobileCurrentReview].author}</div>
                <div className="text-sm text-cream">
                  {reviews[mobileCurrentReview].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevMobileReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Previous review"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextMobileReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors z-10"
            aria-label="Next review"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === mobileCurrentReview ? 'bg-amber-700 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Stacked View */}
      <div className="hidden lg:flex flex-col gap-6 relative">
        {reviews.map((review, index) => (
          <div 
            key={review.id}
            className={`p-6 rounded-lg transition-all duration-300 relative ${
              index === currentReview ? 'bg-primary text-white' : 
              index === (currentReview + 1) % reviews.length ? 'bg-white text-gray-800 border border-gray-200' : 
              'bg-white text-gray-800 border border-gray-200'
            }`}
            style={{
              display: index === currentReview || index === (currentReview + 1) % reviews.length || index === (currentReview + 2) % reviews.length ? 'block' : 'none'
            }}
          >
            {/* Stars */}
            <div className="flex mb-4">
              {renderStars(review.rating)}
            </div>
            {/* Review text */}
            <p className="mb-4 leading-relaxed">
              {review.text}
            </p>
            {/* Author info */}
            <div>
              <div className="font-semibold">{review.author}</div>
              <div className={`text-sm ${
                index === currentReview ? 'text-cream' : 'text-gray-500'
              }`}>
                {review.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
