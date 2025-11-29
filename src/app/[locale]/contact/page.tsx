"use client";
import { useLocale } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo as contactInfoEN, contactFormFields as contactFormFieldsEN, mapLocation as mapLocationEN } from '@/data/contact/contactData';
import { contactInfo as contactInfoDE, contactFormFields as contactFormFieldsDE, mapLocation as mapLocationDE } from '@/data/contact/contactData.de';

export default function ContactPage() {
  const locale = useLocale();
  const contactInfo = locale === 'de' ? contactInfoDE : contactInfoEN;
  const contactFormFields = locale === 'de' ? contactFormFieldsDE : contactFormFieldsEN;
  const mapLocation = locale === 'de' ? mapLocationDE : mapLocationEN;
  return (
    <div className="min-h-screen bg-[#F6F6EF]">
      <Header />
      <main>
        {/* Map Section */}
        <div className="relative h-64 sm:h-80 md:h-96 bg-gray-300">
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
        </div>

        {/* Contact Form Section */}
        <div className="py-10 sm:py-14 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-2xl md:max-w-4xl lg:max-w-6xl">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                <span dangerouslySetInnerHTML={{ __html: contactInfo.title.replace('Touch', '<span style=\"color: #B8860B\">Touch</span>') }} />
              </h1>
              <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
                {contactInfo.description}
              </p>
            </div>

            <ContactForm formFields={contactFormFields} />

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-10 sm:mt-12">
              <div className="text-center">
                <div className="text-gray-800 font-semibold mb-1 text-base sm:text-lg">PHONE</div>
                <div className="text-gray-600 text-sm sm:text-base">{contactInfo.phone}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-800 font-semibold mb-1 text-base sm:text-lg">EMAIL</div>
                <div className="text-gray-600 text-sm sm:text-base">{contactInfo.email}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
