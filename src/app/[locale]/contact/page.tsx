"use client";
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo as contactInfoEN, contactFormFields as contactFormFieldsEN, mapLocation as mapLocationEN, contactPageContent as contactPageContentEN } from '@/data/contact/contactData';
import { contactInfo as contactInfoDE, contactFormFields as contactFormFieldsDE, mapLocation as mapLocationDE, contactPageContent as contactPageContentDE } from '@/data/contact/contactData.de';

export default function ContactPage() {
  const locale = useLocale();
  const contactInfo = locale === 'de' ? contactInfoDE : contactInfoEN;
  const contactFormFields = locale === 'de' ? contactFormFieldsDE : contactFormFieldsEN;
  const mapLocation = locale === 'de' ? mapLocationDE : mapLocationEN;
  const contactPageContent = locale === 'de' ? contactPageContentDE : contactPageContentEN;
  return (
    <div className="min-h-screen bg-[#F6F6EF] relative overflow-hidden">
  
        {/* Decorative Background Vector 1 */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-0">
          <Image
            src="/images/home/Vector1.jpg"
            alt="Decorative background"
            fill
            className="object-contain object-right-top opacity-40 mix-blend-multiply"
            priority
            style={{ filter: 'brightness(1.1) contrast(0.9)' }}
          />
        </div>

        <Header />
        <main>
          {/* Map Section */}
          <motion.div
            className="relative h-56 sm:h-72 md:h-80 lg:h-96 bg-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Map Embed using latitude and longitude */}
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps?q=${mapLocation.latitude},${mapLocation.longitude}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Form Section */}
          <div className="py-8 sm:py-12 md:py-14 lg:py-16 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-lg md:max-w-2xl lg:max-w-4xl">
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
                  <span dangerouslySetInnerHTML={{ __html: contactInfo.title.replace('Touch', '<span style=\"color: #B8860B\">Touch</span>') }} />
                </h1>
                <p className="text-gray-600 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                  {contactInfo.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ContactForm formFields={contactFormFields} pageContent={contactPageContent} />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 md:gap-16 mt-8 sm:mt-10 md:mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg tracking-wider">PHONE</div>
                  <a
                    href="tel:+94812222962"
                    className="text-gray-600 text-sm sm:text-base md:text-lg hover:text-amber-700 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base md:text-lg tracking-wider">EMAIL</div>
                  <a
                    href="mailto:info@shenayaresidence.com"
                    className="text-gray-600 text-sm sm:text-base md:text-lg hover:text-amber-700 transition-colors break-all cursor-pointer"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>


        </main>
        <Footer />
      </div>
    
  );
}
