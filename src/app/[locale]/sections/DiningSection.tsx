"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { diningSection as diningSectionEN } from "@/data/homepage/homepageContent";
import { diningSection as diningSectionDE } from "@/data/homepage/homepageContent.de";
import { motion } from "framer-motion";

export default function DiningSection() {
  const locale = useLocale();
  const diningSection = locale === "de" ? diningSectionDE : diningSectionEN;
  const router = useRouter();

  return (
    <section className="container mx-auto px-6 py-16 relative z-10">
      
      {/* Top Section - Centered Content */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight max-w-4xl mx-auto text-primary">
          {diningSection.title}
        </h2>

        <p className="leading-relaxed text-base sm:text-lg mb-8 max-w-3xl mx-auto text-medium">
          {diningSection.description}
        </p>

        <motion.button
          className="text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium uppercase tracking-wide bg-primary"
          onClick={() => router.push("/dining")}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
          whileTap={{ scale: 1.1 }}
        >
          {diningSection.buttonText}
        </motion.button>
      </motion.div>

      {/* Bottom Section - Three Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-center">
        {/* Left - Text Block */}
        <motion.div
          className="flex-1 lg:max-w-xs text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-4">
            {diningSection.leftText.title}
          </h3>
          <div className="w-16 h-1 mb-6 bg-primary mx-auto lg:mx-0"></div>
        </motion.div>

        {/* Center - Large Dining Image */}
        <motion.div
          className="relative w-full sm:w-96 md:w-[450px] h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg mx-auto lg:mx-0"
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
          className="flex flex-col gap-4 items-center lg:items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg">
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
    </section>
  );
}
