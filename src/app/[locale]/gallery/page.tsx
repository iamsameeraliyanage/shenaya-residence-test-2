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
import { motion } from "framer-motion";

export default function GalleryPage() {
  const locale = useLocale();
  const galleryItems = locale === "de" ? galleryItemsDE : galleryItemsEN;
  const galleryCategories =
    locale === "de" ? galleryCategoriesDE : galleryCategoriesEN;

  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Gallery Header */}
        <motion.h1
          className="text-6xl text-primary text-center mb-16 text-amber-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Gallery
        </motion.h1>

        {/* Featured Images */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
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
                priority={index < 2} // preload first 2 for LCP
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

      <Footer />
    </div>
  );
}

