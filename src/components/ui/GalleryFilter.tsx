"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
  size: "large" | "medium" | "small" | "tall";
}

interface Props {
  galleryItems: GalleryItem[];
  galleryCategories: string[];
}

export default function GalleryFilter({ galleryItems, galleryCategories }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Reset carousel index when filter changes
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const getItemClasses = (size: string) => {
    switch (size) {
      case "large":
        return "row-span-2 col-span-2";
      case "tall":
        return "row-span-2 col-span-1";
      case "medium":
        return "row-span-1 col-span-1";
      case "small":
        return "row-span-1 col-span-1";
      default:
        return "row-span-1 col-span-1";
    }
  };

  return (
    <>
      {/* Category Filters */}
      <div className="flex justify-center gap-3 sm:gap-8 mb-8 sm:mb-12 flex-wrap px-2 relative z-10">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            className={`text-sm sm:text-lg font-medium transition-colors py-1 px-2 text-primary ${
              activeFilter === category
                ? "border-b-2 border-primary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile: Carousel View */}
      <div className="md:hidden mb-8">
        {filteredItems.length > 0 ? (
          <div className="relative">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFilter}-${currentImageIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={filteredItems[currentImageIndex].image}
                    alt={filteredItems[currentImageIndex].title}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  {/* Image Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-medium">
                      {filteredItems[currentImageIndex].title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
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
                  {filteredItems.map((_, index) => (
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
              </>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">No items in this category</p>
        )}
      </div>

      {/* Desktop: Gallery Grid */}
      <motion.div
        className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              style={{ minWidth: '150px', height: '200px', overflow: 'hidden', borderRadius: '12px' }}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32, mass: 0.7 }}
              layout
            >
              <img
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* See More Button */}
      <div className="text-center mt-12">
        <button
          className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          style={{ backgroundColor: "#B09244" }}
        >
          See More
        </button>
      </div>
    </>
  );
}
