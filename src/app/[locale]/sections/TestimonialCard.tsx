"use client";

import { Testimonial } from "@/data";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  const controls = useAnimation(); // ✅ Valid Hook

  useEffect(() => {
    const timeout = setTimeout(() => {
      controls.start({ opacity: 1, x: 0 });
    }, delay);

    return () => clearTimeout(timeout);
  }, [controls, delay]);

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full"
      initial={{ opacity: 0, x: -60 }}
      animate={controls}
      transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
    >
      <p className="text-gray-800 leading-relaxed mb-6 text-sm sm:text-base">
        {testimonial.content}
      </p>
      <div className="mt-auto border-t pt-4">
        <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
          {testimonial.author}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm">
          {testimonial.position}
        </p>
      </div>
    </motion.div>
  );
}
