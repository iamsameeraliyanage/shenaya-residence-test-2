"use client";
import { useTranslations, useLocale } from "next-intl";
import { customerTestimonials as customerTestimonialsEN } from "@/data/testimonials/customerTestimonials";
import { customerTestimonials as customerTestimonialsDE } from "@/data/testimonials/customerTestimonials.de";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TestimonialsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const customerTestimonials =
    locale === "de" ? customerTestimonialsDE : customerTestimonialsEN;

  // Animation controls for each testimonial
  const controlsArray = customerTestimonials.map(() => useAnimation());

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    controlsArray.forEach((controls, idx) => {
      timeoutIds.push(
        setTimeout(() => {
          controls.start({ opacity: 1, x: 0 });
        }, 400 + idx * 700)
      );
    });
    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <section className="container mx-auto px-6 py-16 relative z-10">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
          {t("testimonials.title")}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {customerTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full"
              initial={{ opacity: 0, x: -60 }}
              animate={controlsArray[idx]}
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
          ))}
        </div>
      </div>
    </section>
  );
}
