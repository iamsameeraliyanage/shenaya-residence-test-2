"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  calmEnvironmentSection as calmEnvironmentSectionEN,
  hikingSection as hikingSectionEN,
  natureWalksSection as natureWalksSectionEN,
  ayurvedicTreatmentsSection as ayurvedicTreatmentsSectionEN,
  culturalToursSection as culturalToursSectionEN,
  // newsletterSection as newsletterSectionEN,
} from "@/data/discover/discoverContent";
import {
  calmEnvironmentSection as calmEnvironmentSectionDE,
  hikingSection as hikingSectionDE,
  natureWalksSection as natureWalksSectionDE,
  ayurvedicTreatmentsSection as ayurvedicTreatmentsSectionDE,
  culturalToursSection as culturalToursSectionDE,
  // newsletterSection as newsletterSectionDE,
} from "@/data/discover/discoverContent.de";

export default function DiscoverPage() {
  const locale = useLocale();

  const calmEnvironmentSection =
    locale === "de" ? calmEnvironmentSectionDE : calmEnvironmentSectionEN;
  const hikingSection = locale === "de" ? hikingSectionDE : hikingSectionEN;
  const natureWalksSection =
    locale === "de" ? natureWalksSectionDE : natureWalksSectionEN;
  const ayurvedicTreatmentsSection =
    locale === "de"
      ? ayurvedicTreatmentsSectionDE
      : ayurvedicTreatmentsSectionEN;
  const culturalToursSection =
    locale === "de" ? culturalToursSectionDE : culturalToursSectionEN;
  // const newsletterSection = locale === 'de' ? newsletterSectionDE : newsletterSectionEN;

  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      <Header />
      <main className="bg-[#F6F6EF]">
        {/* 1. Calm Environment Section - Images Left, Text Right */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-[#F6F6EF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decorative shape */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Images */}
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={calmEnvironmentSection.image}
                    alt={calmEnvironmentSection.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image
                    src={
                      calmEnvironmentSection.additionalImages?.[0]?.src ||
                      "/images/home/garden.png"
                    }
                    alt={
                      calmEnvironmentSection.additionalImages?.[0]?.alt ||
                      "Garden landscape view"
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              {/* Right Side - Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                  {calmEnvironmentSection.title
                    .split("\n")
                    .map((line, index) => (
                      <span
                        key={index}
                        style={{ color: "#B09244" }}
                        className="block"
                      >
                        {line}
                      </span>
                    ))}
                </h1>
                <div className="space-y-4 md:space-y-6">
                  {calmEnvironmentSection.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-600 leading-relaxed text-base md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* 2. Hiking Section - Text Left, Images Right */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-[#F6F6EF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Text Content */}
              <div className="md:pr-6 lg:pr-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {hikingSection.title.split("\n").map((line, index) => (
                    <span
                      key={index}
                      style={{ color: "#B09244" }}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {hikingSection.description}
                </p>
              </div>
              {/* Right Side - Images */}
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={hikingSection.image}
                    alt={hikingSection.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image
                    src={
                      hikingSection.additionalImages?.[0]?.src ||
                      "/images/home/temple.jpg"
                    }
                    alt={
                      hikingSection.additionalImages?.[0]?.alt ||
                      "Temple on hilltop"
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* 3. Nature Walks Section - Images Left, Text Right */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-[#F6F6EF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Images */}
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={natureWalksSection.image}
                    alt={natureWalksSection.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image
                    src={
                      natureWalksSection.additionalImages?.[0]?.src ||
                      "/images/home/staircase.jpg"
                    }
                    alt={
                      natureWalksSection.additionalImages?.[0]?.alt ||
                      "Stone staircase in nature"
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              {/* Right Side - Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {natureWalksSection.title.split("\n").map((line, index) => (
                    <span
                      key={index}
                      style={{ color: "#B09244" }}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {natureWalksSection.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        {/* 4. Ayurvedic Treatments Section - Text Left, Images Right */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-[#F6F6EF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Text Content */}
              <div className="md:pr-6 lg:pr-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {ayurvedicTreatmentsSection.title
                    .split("\n")
                    .map((line, index) => (
                      <span
                        key={index}
                        style={{ color: "#B09244" }}
                        className="block"
                      >
                        {line}
                      </span>
                    ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {ayurvedicTreatmentsSection.description}
                </p>
              </div>
              {/* Right Side - Images */}
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={ayurvedicTreatmentsSection.image}
                    alt={ayurvedicTreatmentsSection.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image
                    src={
                      ayurvedicTreatmentsSection.additionalImages?.[0]?.src ||
                      "/images/home/museum.jpg"
                    }
                    alt={
                      ayurvedicTreatmentsSection.additionalImages?.[0]?.alt ||
                      "Traditional wellness setting"
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* 5. Cultural Tours Section - Images Left, Text Right */}
        <motion.section
          className="py-10 md:py-16 lg:py-20 relative overflow-hidden bg-[#F6F6EF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-50 to-transparent opacity-40 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Side - Images */}
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <Image
                    src={culturalToursSection.image}
                    alt={culturalToursSection.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-lg w-full max-w-xs md:max-w-[313px] h-72 md:h-[570px] md:-mt-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <Image
                    src={
                      culturalToursSection.additionalImages?.[0]?.src ||
                      "/images/home/eventspace.jpg"
                    }
                    alt={
                      culturalToursSection.additionalImages?.[0]?.alt ||
                      "Traditional cultural venue"
                    }
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              {/* Right Side - Text Content */}
              <div className="md:pl-6 lg:pl-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                  {culturalToursSection.title.split("\n").map((line, index) => (
                    <span
                      key={index}
                      style={{ color: "#B09244" }}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {culturalToursSection.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
