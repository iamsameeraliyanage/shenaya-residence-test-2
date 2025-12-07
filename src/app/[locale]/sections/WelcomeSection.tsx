"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { welcomeSection as welcomeSectionEN } from "@/data/homepage/homepageContent";
import { welcomeSection as welcomeSectionDE } from "@/data/homepage/homepageContent.de";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WelcomeSection() {
  const locale = useLocale();
  const welcomeSection = locale === "de" ? welcomeSectionDE : welcomeSectionEN;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [welcomeSection.leftRoom, welcomeSection.rightRoom];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Welcome Text */}
        <motion.div
          className="text-center mb-6 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-primary px-2">
            {welcomeSection.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < welcomeSection.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Desktop: Images and Text Side by Side */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Left Room Image */}
          <motion.div
            className="relative w-64 lg:w-80 xl:w-[400px] h-80 lg:h-[600px] xl:h-[800px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={welcomeSection.leftRoom.src}
              alt={welcomeSection.leftRoom.alt}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Center Text Block */}
          <motion.div
            className="text-center px-4 lg:px-6 max-w-md flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 text-sage">
              {welcomeSection.centerText.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < welcomeSection.centerText.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <p className="leading-relaxed text-sm lg:text-base text-dark">
              {welcomeSection.centerText.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < welcomeSection.centerText.description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>

          {/* Right Room Image */}
          <motion.div
            className="relative w-64 lg:w-80 xl:w-[400px] h-80 lg:h-[600px] xl:h-[800px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Image
              src={welcomeSection.rightRoom.src}
              alt={welcomeSection.rightRoom.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile: Swipeable Carousel */}
        <div className="md:hidden">
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

          {/* Center Text Block */}
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-sage">
              {welcomeSection.centerText.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < welcomeSection.centerText.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <p className="leading-relaxed text-sm sm:text-base text-dark">
              {welcomeSection.centerText.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < welcomeSection.centerText.description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </section>
  );
}
