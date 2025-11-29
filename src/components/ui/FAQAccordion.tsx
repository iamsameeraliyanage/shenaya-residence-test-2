"use client";
import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqItems: FAQItem[];
}

export default function FAQAccordion({ faqItems }: FAQAccordionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {faqItems.map((faq) => (
          <div key={faq.id} className="mb-4">
            <div 
              className="bg-transparent border-b border-gray-200 cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="py-6 flex justify-between items-center hover:bg-gray-50/50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <div 
                  className={`transform transition-transform duration-200 ${
                    openFAQ === faq.id ? 'rotate-45' : ''
                  }`}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 5V19M5 12H19" 
                      stroke="#B8860B" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              {openFAQ === faq.id && (
                <div className="pb-6">
                  <div className="pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
