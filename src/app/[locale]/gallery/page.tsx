"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryFilter from "@/components/ui/GalleryFilter";
import {
  galleryItems as galleryItemsEN,
  galleryCategories as galleryCategoriesEN,
} from "@/data/gallery/galleryItems";
import {
  galleryItems as galleryItemsDE,
  galleryCategories as galleryCategoriesDE,
} from "@/data/gallery/galleryItems.de";
import { featuredImages } from "@/data/gallery/featuredImages";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  const locale = useLocale();
  const galleryItems = locale === "de" ? galleryItemsDE : galleryItemsEN;
  const galleryCategories =
    locale === "de" ? galleryCategoriesDE : galleryCategoriesEN;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % featuredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredImages.length) % featuredImages.length);
  };

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

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Gallery Header */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary text-center mb-8 sm:mb-12 md:mb-16 text-amber-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Gallery
        </motion.h1>

        {/* Mobile: Featured Images Carousel */}
        <div className="md:hidden mb-8">
          <div className="relative">
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
                    src={featuredImages[currentImageIndex].src}
                    alt={featuredImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap px-2">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-amber-700 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Featured Images Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {featuredImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-48 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       20vw"
                priority={index < 2}
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Filter */}
        <GalleryFilter
          galleryItems={galleryItems}
          galleryCategories={galleryCategories}
        />
      </main>
      </div>

      <Footer />
    </div>
  );
}

