"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { welcomeSection as welcomeSectionEN } from "@/data/homepage/homepageContent";
import { welcomeSection as welcomeSectionDE } from "@/data/homepage/homepageContent.de";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  const locale = useLocale();
  const welcomeSection = locale === "de" ? welcomeSectionDE : welcomeSectionEN;

  return (
      <section className="container mx-auto px-6 py-16 relative z-10">
        {/* Welcome Text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            {welcomeSection.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < welcomeSection.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Images and Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
          {/* Left Room Image */}
          <motion.div
            className="relative w-full sm:w-64 md:w-80 lg:w-[400px] h-64 sm:h-80 md:h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-lg"
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
            className="text-center px-4 sm:px-6 max-w-md flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-sage">
              {welcomeSection.centerText.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < welcomeSection.centerText.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h3>
            <p className="leading-relaxed text-base sm:text-md text-dark">
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
            className="relative w-full sm:w-64 md:w-80 lg:w-[400px] h-64 sm:h-80 md:h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-lg"
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
      </section>
  );
}
