"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 bg-[#B09244]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white uppercase tracking-wide">
              NEWSLETTER SIGN UP
            </h2>

            {/* Email Signup */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-6 py-4 text-gray-800 bg-white/10 border border-white placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-amber-700 transition-colors font-medium uppercase tracking-wide">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 md:space-x-8">
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                FACEBOOK
              </a>
              <span className="text-white">◊</span>
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                INSTAGRAM
              </a>
              <span className="text-white">◊</span>
              <a className="text-white hover:text-gray-200 transition-colors uppercase tracking-wide">
                TWITTER
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-16 bg-white">
        <div className="container mx-auto px-6">

          {/* Responsive Columns */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0">

            {/* Get in Touch */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-primary">
                GET IN TOUCH
              </h3>

              <div className="space-y-3 text-gray-600">
                <p>Tel: +94 (0)81-2054262</p>

                <p>
                  <a
                    href="mailto:info@shenayaresidence.com"
                    className="hover:text-amber-600 transition-colors"
                  >
                    info@shenayaresidence.com
                  </a>
                </p>

                <div className="pt-2">
                  <p>No. 59, Hill Crest Green,</p>
                  <p>Bowalawatta, 20000</p>
                  <p>Kandy, Sri Lanka</p>
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
                SITEMAP
              </h3>

              <div className="space-y-4 text-gray-600">

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                  <Link href="/shenaya" className="hover:text-amber-600 transition-colors">Shenaya</Link>
                  <Link href="/rooms" className="hover:text-amber-600 transition-colors">Rooms</Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
                  <Link href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</Link>
                  <Link href="/team" className="hover:text-amber-600 transition-colors">Team</Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                  <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
                  <Link href="/faq" className="hover:text-amber-600 transition-colors">FAQ</Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
