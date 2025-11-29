"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { roomsSection as roomsSectionEN } from "@/data/homepage/homepageContent";
import { roomsSection as roomsSectionDE } from "@/data/homepage/homepageContent.de";
import { motion } from "framer-motion";

export default function RoomsSection() {
  const locale = useLocale();
  const roomsSection = locale === "de" ? roomsSectionDE : roomsSectionEN;
  const router = useRouter();

  return (
      <section className="container mx-auto px-6 py-16 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-primary">
            {roomsSection.title}
          </h2>
        </motion.div>

        {/* Rooms Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left - Large Room Image */}
          <motion.div
            className="relative w-full lg:w-[600px] h-64 sm:h-80 md:h-96 lg:h-[700px] rounded-3xl overflow-hidden shadow-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={roomsSection.largeRoom.src}
              alt={roomsSection.largeRoom.alt}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Top Right Room Image - Sitting Area */}
            <motion.div
              className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[340px] rounded-3xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src={roomsSection.roomArea.src}
                alt={roomsSection.roomArea.alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text Section and Bedroom Image - Side by Side on desktop, stacked on mobile */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Text Section */}
              <motion.div
                className="flex-1 flex flex-col justify-center p-6 bg-cream rounded-3xl shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <p className="text-gray-800 text-base sm:text-md leading-relaxed mb-6">
                  {roomsSection.textContent.description}
                </p>
                <motion.button
                  className="text-black bg-light-gray hover:opacity-90 transition-opacity font-medium py-3 px-6 rounded-lg w-full md:w-auto"
                  onClick={() => router.push("/reservation")}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  {roomsSection.textContent.buttonText}
                </motion.button>
              </motion.div>

              {/* Bottom Right Room Image - Bedroom */}
              <motion.div
                className="relative flex-1 h-64 sm:h-72 md:h-80 lg:h-[333px] rounded-3xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Image
                  src={roomsSection.bedroom.src}
                  alt={roomsSection.bedroom.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
