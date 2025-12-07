"use client";
import { useTranslations, useLocale } from "next-intl";
import { customerTestimonials as customerTestimonialsEN } from "@/data/testimonials/customerTestimonials";
import { customerTestimonials as customerTestimonialsDE } from "@/data/testimonials/customerTestimonials.de";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TestimonialsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const customerTestimonials = locale === "de" ? customerTestimonialsDE : customerTestimonialsEN;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % customerTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + customerTestimonials.length) % customerTestimonials.length);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary px-2">
          {t("testimonials.title")}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2">
          {t("testimonials.subtitle")}
        </p>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {customerTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 120, delay: idx * 0.15 }}
            >
              <p className="text-gray-800 leading-relaxed mb-6 text-sm sm:text-base">
                {testimonial.content}
              </p>
              <div className="mt-auto border-t pt-4">
                <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                  {testimonial.author}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden px-12 sm:px-16">
        <div className="relative">
          <div className="relative w-full min-h-[280px] sm:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col"
              >
                <p className="text-gray-800 leading-relaxed mb-6 text-sm sm:text-base">
                  {customerTestimonials[currentIndex].content}
                </p>
                <div className="mt-auto border-t pt-4">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    {customerTestimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {customerTestimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-2.5 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-2.5 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-5 flex-wrap">
            {customerTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
