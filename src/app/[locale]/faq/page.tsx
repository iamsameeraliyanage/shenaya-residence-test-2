"use client";
import { useLocale } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { faqData as faqDataEN, faqPageContent as faqPageContentEN } from '@/data/faq/faqData';
import { faqData as faqDataDE, faqPageContent as faqPageContentDE } from '@/data/faq/faqData.de';

export default function FAQPage() {
  const locale = useLocale();
  const faqData = locale === 'de' ? faqDataDE : faqDataEN;
  const faqPageContent = locale === 'de' ? faqPageContentDE : faqPageContentEN;
  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      {/* Header Component */}
      <Header />

      {/* FAQ Page Header */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6" style={{ color: '#B8860B' }}>
            {faqPageContent.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            {faqPageContent.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <FAQAccordion faqItems={faqData} />
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
