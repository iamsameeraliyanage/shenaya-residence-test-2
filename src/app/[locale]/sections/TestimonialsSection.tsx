"use client";

import { useTranslations, useLocale } from "next-intl";
import { customerTestimonials as customerTestimonialsEN } from "@/data/testimonials/customerTestimonials";
import { customerTestimonials as customerTestimonialsDE } from "@/data/testimonials/customerTestimonials.de";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const t = useTranslations();
  const locale = useLocale();

  const customerTestimonials =
    locale === "de" ? customerTestimonialsDE : customerTestimonialsEN;

  return (
    <section className="container mx-auto px-6 py-16 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
          {t("testimonials.title")}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {customerTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={400 + idx * 700}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
