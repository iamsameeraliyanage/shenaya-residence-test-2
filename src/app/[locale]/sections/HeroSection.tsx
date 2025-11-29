"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { heroSection as heroSectionEN } from "@/data/homepage/homepageContent";
import { heroSection as heroSectionDE } from "@/data/homepage/homepageContent.de";
import { motion } from "framer-motion";

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const heroSection = locale === "de" ? heroSectionDE : heroSectionEN;

  return (
      <section className="container mx-auto px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 relative z-10">
        {/* Hero Text */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: "#B09244" }}>
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto" style={{ color: "#B09244" }}>
            {t("hero.subtitle")}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-6xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <Image
            src={heroSection.mainImage.src}
            alt={heroSection.mainImage.alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>
  );
}
