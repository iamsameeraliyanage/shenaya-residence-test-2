"use client";
import { useLocale } from 'next-intl';
import Link from "next/link";
import Image from "next/image";
import { footerContent as footerContentEN } from '@/data/footer/footerData';
import { footerContent as footerContentDE } from '@/data/footer/footerData.de';

export default function Footer() {
  const locale = useLocale();
  const content = locale === 'de' ? footerContentDE : footerContentEN;

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 bg-[#B09244] relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wide">
              {content.newsletter.title}
            </h2>

            {/* Email Signup */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                <input
                  type="email"
                  placeholder={content.newsletter.emailPlaceholder}
                  className="flex-1 px-6 py-4 text-gray-800 bg-white/10 border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-amber-700 transition-colors font-medium uppercase tracking-wide">
                  {content.newsletter.subscribeButton}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                {content.socialMedia.facebook}
              </a>
              <span className="text-white">◊</span>
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                {content.socialMedia.instagram}
              </a>
              <span className="text-white">◊</span>
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                {content.socialMedia.twitter}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 bg-white relative z-20">
        <div className="container mx-auto px-6">

          {/* Responsive Columns */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0">

            {/* Get in Touch */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-primary">
                {content.getInTouch.title}
              </h3>

              <div className="space-y-3 text-gray-600">
                <p>
                  <a
                    href="tel:+94812054262"
                    className="hover:text-amber-600 transition-colors"
                  >
                    {content.getInTouch.phone}
                  </a>
                </p>

                <p>
                  <a
                    href={`mailto:${content.getInTouch.email}`}
                    className="hover:text-amber-600 transition-colors"
                  >
                    {content.getInTouch.email}
                  </a>
                </p>

                <div className="pt-2">
                  <p>{content.getInTouch.address.line1}</p>
                  <p>{content.getInTouch.address.line2}</p>
                  <p>{content.getInTouch.address.line3}</p>
                </div>
              </div>
            </div>

            {/* Separator - only desktop */}
            <div className="hidden lg:block w-px h-32 bg-gray-300"></div>

            {/* Logo */}
            <div className="flex-1 text-center">
              <Image
                src="/images/footer/logo.jpg"
                alt="Shenaya Residence Logo"
                width={420}
                height={200}
                className="mx-auto w-64 md:w-80 lg:w-[380px] h-auto"
              />
            </div>

            {/* Separator - only desktop */}
            <div className="hidden lg:block w-px h-32 bg-gray-300"></div>

            {/* Sitemap */}
            <div className="flex-1 text-center lg:text-right">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-primary">
                {content.sitemap.title}
              </h3>

              <div className="space-y-4 text-gray-600">

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/" className="hover:text-amber-600 transition-colors">{content.sitemap.links.home}</Link>
                  <Link href="/shenaya" className="hover:text-amber-600 transition-colors">{content.sitemap.links.shenaya}</Link>
                  <Link href="/rooms" className="hover:text-amber-600 transition-colors">{content.sitemap.links.rooms}</Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/services" className="hover:text-amber-600 transition-colors">{content.sitemap.links.services}</Link>
                  <Link href="/gallery" className="hover:text-amber-600 transition-colors">{content.sitemap.links.gallery}</Link>
                  <Link href="/team" className="hover:text-amber-600 transition-colors">{content.sitemap.links.team}</Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/contact" className="hover:text-amber-600 transition-colors">{content.sitemap.links.contact}</Link>
                  <Link href="/faq" className="hover:text-amber-600 transition-colors">{content.sitemap.links.faq}</Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
