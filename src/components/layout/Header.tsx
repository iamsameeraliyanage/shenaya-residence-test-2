"use client";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a navigation item is active
  const isActive = (path: string) => {
    if (!pathname) return false;
    
    if (path === '/') {
      // For home page, check if pathname is root or just locale
      return pathname === '/' || pathname.match(/^\/[a-z]{2}$/);
    }
    
    // Remove locale from pathname for comparison
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    
    // For other pages, check if the path matches
    return pathWithoutLocale === path || pathWithoutLocale.startsWith(path + '/');
  };

  // Function to get navigation item classes
  const getNavClasses = (path: string) => {
    const baseClasses = "font-medium transition-colors";
    const activeClasses = "font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-amber-600";
    
    if (isActive(path)) {
      return `${baseClasses} ${activeClasses}`;
    }
    return `${baseClasses} ${inactiveClasses}`;
  };

  // Function to get navigation item style
  const getNavStyle = (path: string) => {
    if (isActive(path)) {
      return { color: '#B09244' };
    }
    return {};
  };

  return (
    <header className="bg-transparent w-full relative">
      {/* White Box with Logo and Make Reservation Button */}
      <div
        className="w-full mx-auto bg-white shadow-sm opacity-100"
        style={{ boxShadow: '10px 5px 5px 0px rgba(0, 0, 0, 0.02)' }}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 h-full">
          <div className="flex flex-row items-center justify-between h-full gap-4">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Image
                src="/images/home/logo.jpg"
                alt="Shenaya Residence Logo"
                width={100}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop: Language Switcher and Make Reservation Button */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href="/reservation"
                className="text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity font-medium"
                style={{ backgroundColor: '#B09244' }}
              >
                {t('hero.makeReservation')}
              </Link>
            </div>

            {/* Mobile: Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:block container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-8">
          <Link
            href="/"
            className={getNavClasses('/')}
            style={getNavStyle('/')}
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/accommodation"
            className={getNavClasses('/accommodation')}
            style={getNavStyle('/accommodation')}
          >
            {t('nav.accommodation')}
          </Link>
          <Link
            href="/discover"
            className={getNavClasses('/discover')}
            style={getNavStyle('/discover')}
          >
            {t('nav.discover')}
          </Link>
          <Link
            href="/dining"
            className={getNavClasses('/dining')}
            style={getNavStyle('/dining')}
          >
            {t('nav.dining')}
          </Link>
          <Link
            href="/gallery"
            className={getNavClasses('/gallery')}
            style={getNavStyle('/gallery')}
          >
            {t('nav.gallery')}
          </Link>
          <Link
            href="/reviews"
            className={getNavClasses('/reviews')}
            style={getNavStyle('/reviews')}
          >
            {t('nav.reviews')}
          </Link>
          <Link
            href="/contact"
            className={getNavClasses('/contact')}
            style={getNavStyle('/contact')}
          >
            {t('nav.contact')}
          </Link>
          <Link
            href="/promotion"
            className={getNavClasses('/promotion')}
            style={getNavStyle('/promotion')}
          >
            {t('nav.promotions')}
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={getNavClasses('/') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/accommodation"
                  className={getNavClasses('/accommodation') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/accommodation')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.accommodation')}
                </Link>
                <Link
                  href="/discover"
                  className={getNavClasses('/discover') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/discover')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.discover')}
                </Link>
                <Link
                  href="/dining"
                  className={getNavClasses('/dining') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/dining')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.dining')}
                </Link>
                <Link
                  href="/gallery"
                  className={getNavClasses('/gallery') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/gallery')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.gallery')}
                </Link>
                <Link
                  href="/reviews"
                  className={getNavClasses('/reviews') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/reviews')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.reviews')}
                </Link>
                <Link
                  href="/contact"
                  className={getNavClasses('/contact') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                <Link
                  href="/promotion"
                  className={getNavClasses('/promotion') + ' py-2 px-4 rounded-lg hover:bg-gray-50'}
                  style={getNavStyle('/promotion')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.promotions')}
                </Link>

                {/* Mobile: Language Switcher and Reservation Button */}
                <div className="border-t pt-4 mt-2 flex flex-col gap-3">
                  <LanguageSwitcher />
                  <Link
                    href="/reservation"
                    className="text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-center"
                    style={{ backgroundColor: '#B09244' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('hero.makeReservation')}
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
