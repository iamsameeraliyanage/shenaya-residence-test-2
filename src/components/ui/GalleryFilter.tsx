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

export default function GalleryFilter({
  galleryItems,
  galleryCategories,
}: Props) {
  // ...existing code...
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  console.log("GalleryFilter filteredItems:", filteredItems);

  // const getItemClasses = (size: string) => {
  //   switch (size) {
  //     case "large":
  //       return "row-span-2 col-span-2";
  //     case "tall":
  //       return "row-span-2 col-span-1";
  //     case "medium":
  //       return "row-span-1 col-span-1";
  //     case "small":
  //       return "row-span-1 col-span-1";
  //     default:
  //       return "row-span-1 col-span-1";
  //   }
  // };

  return (
    <>
      {/* Category Filters */}
      <div className="flex justify-center space-x-8 mb-12 flex-wrap">
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`text-lg font-medium transition-colors py-1 text-primary ${
              activeFilter === category
                ? "border-b-2 border-primary"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              style={{
                minWidth: "150px",
                height: "200px",
                overflow: "hidden",
                borderRadius: "12px",
              }}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 32,
                mass: 0.7,
              }}
              layout
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
