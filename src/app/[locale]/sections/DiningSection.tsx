"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { diningSection as diningSectionEN } from "@/data/homepage/homepageContent";
import { diningSection as diningSectionDE } from "@/data/homepage/homepageContent.de";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DiningSection() {
  const locale = useLocale();
  const diningSection = locale === "de" ? diningSectionDE : diningSectionEN;
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [diningSection.centerDining, diningSection.rightEvent];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
      
      {/* Top Section - Centered Content */}
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight max-w-4xl mx-auto text-primary px-2">
          {diningSection.title}
        </h2>

        <p className="leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto text-medium px-2">
          {diningSection.description}
        </p>

        <motion.button
          className="text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:opacity-90 transition-opacity font-medium uppercase tracking-wide bg-primary text-sm sm:text-base"
          onClick={() => router.push("/dining")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
          whileTap={{ scale: 1.1 }}
        >
          {diningSection.buttonText}
        </motion.button>
      </motion.div>

      {/* Desktop Layout - Three Column */}
      <div className="hidden lg:flex flex-row gap-8 max-w-7xl mx-auto items-center">
        {/* Left - Text Block */}
        <motion.div
          className="max-w-xs text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            {diningSection.leftText.title}
          </h3>
          <div className="w-16 h-1 mb-6 bg-primary"></div>
        </motion.div>

        {/* Center - Large Dining Image */}
        <motion.div
          className="relative w-[450px] h-96 rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Image
            src={diningSection.centerDining.src}
            alt={diningSection.centerDining.alt}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right - Bar Image and Text */}
        <motion.div
          className="flex flex-col gap-4 items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={diningSection.rightEvent.src}
              alt={diningSection.rightEvent.alt}
              fill
              className="object-cover"
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800 text-center">
            {diningSection.rightEvent.title}
          </h4>
        </motion.div>
      </div>

      {/* Mobile Layout with Carousel */}
      <div className="lg:hidden">
        {/* Text Block */}
        <motion.div
          className="text-center mb-6 px-2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight mb-3">
            {diningSection.leftText.title}
          </h3>
          <div className="w-16 h-1 mb-4 bg-primary mx-auto"></div>
        </motion.div>

        {/* Image Carousel */}
        <div className="relative mb-4">
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

        {/* Image Title (for rightEvent) */}
        {currentImageIndex === 1 && (
          <motion.h4
            className="text-lg sm:text-xl font-bold text-gray-800 text-center px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {diningSection.rightEvent.title}
          </motion.h4>
        )}
      </div>
    </section>
  );
}
