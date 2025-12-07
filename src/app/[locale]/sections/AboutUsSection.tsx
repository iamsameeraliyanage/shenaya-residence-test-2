"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { aboutUsSection as aboutUsSectionEN } from "@/data/homepage/homepageContent";
import { aboutUsSection as aboutUsSectionDE } from "@/data/homepage/homepageContent.de";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AboutUsSection() {
  const locale = useLocale();
  const router = useRouter();
  const aboutUsSection = locale === "de" ? aboutUsSectionDE : aboutUsSectionEN;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [aboutUsSection.staircase, aboutUsSection.food];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row gap-10 max-w-7xl mx-auto">
          {/* LEFT — STAIRCASE IMAGE */}
          <motion.div
            className="w-[45%] flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-[900px] rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src={aboutUsSection.staircase.src}
                alt={aboutUsSection.staircase.alt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* FOOD IMAGE */}
            <motion.div
              className="relative w-full h-[300px] rounded-[40px] overflow-hidden shadow-lg mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Image
                src={aboutUsSection.food.src}
                alt={aboutUsSection.food.alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* TEXT CONTENT */}
            <motion.div
              className="p-8 rounded-3xl text-left flex-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary-dark mb-2 block">
                {aboutUsSection.content.subtitle}
              </span>

              <h3 className="text-5xl font-bold mb-6 leading-tight text-primary">
                {aboutUsSection.content.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < aboutUsSection.content.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              <div className="space-y-4 mb-8 text-medium leading-relaxed">
                {aboutUsSection.content.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <button
                className="text-white px-8 py-3 rounded-full bg-primary hover:opacity-90 transition-opacity font-medium uppercase tracking-wide"
                onClick={() => router.push("/accommodation")}
              >
                {aboutUsSection.content.buttonText}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Layout with Carousel */}
        <div className="lg:hidden">
          {/* Image Carousel */}
          <div className="relative mb-6">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
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

          {/* TEXT CONTENT */}
          <motion.div
            className="px-2 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark mb-2 block">
              {aboutUsSection.content.subtitle}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-primary">
              {aboutUsSection.content.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < aboutUsSection.content.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>

            <div className="space-y-3 mb-6 text-sm sm:text-base text-medium leading-relaxed">
              {aboutUsSection.content.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <button
              className="text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-primary hover:opacity-90 transition-opacity font-medium uppercase tracking-wide text-sm sm:text-base"
              onClick={() => router.push("/accommodation")}
            >
              {aboutUsSection.content.buttonText}
            </button>
          </motion.div>
        </div>
      </section>
  );
}
