"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { aboutUsSection as aboutUsSectionEN } from "@/data/homepage/homepageContent";
import { aboutUsSection as aboutUsSectionDE } from "@/data/homepage/homepageContent.de";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  const locale = useLocale();
  const router = useRouter();
  const aboutUsSection = locale === "de" ? aboutUsSectionDE : aboutUsSectionEN;

  return (
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* LEFT — STAIRCASE IMAGE */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[900px] rounded-[40px] overflow-hidden shadow-lg">
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
              className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-[40px] overflow-hidden shadow-lg mb-8"
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
              className="p-6 md:p-8 rounded-3xl text-center lg:text-left flex-1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary-dark mb-2 block">
                {aboutUsSection.content.subtitle}
              </span>

              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">
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
      </section>
  );
}
