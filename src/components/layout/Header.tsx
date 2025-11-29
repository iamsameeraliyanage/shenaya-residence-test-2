"use client";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();

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
    <header className="bg-transparent w-full">
      {/* White Box with Logo and Make Reservation Button */}
      <div
        className="w-full mx-auto bg-white shadow-sm opacity-100"
        style={{ boxShadow: '10px 5px 5px 0px rgba(0, 0, 0, 0.02)' }}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4 md:gap-0">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-2 md:mb-0">
              <Image
                src="/images/home/logo.jpg"
                alt="Shenaya Residence Logo"
                width={100}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            {/* Language Switcher and Make Reservation Button */}
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
              <LanguageSwitcher />
              <Link
                href="/reservation"
                className="text-white px-4 py-2 md:px-8 md:py-3 rounded-full hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
                style={{ backgroundColor: '#B09244' }}
              >
                {t('hero.makeReservation')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Outside the white box */}
      <nav className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-8">
          <Link
            href="/"
            className={getNavClasses('/') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/')}
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/accommodation"
            className={getNavClasses('/accommodation') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/accommodation')}
          >
            {t('nav.accommodation')}
          </Link>
          <Link
            href="/discover"
            className={getNavClasses('/discover') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/discover')}
          >
            {t('nav.discover')}
          </Link>
          <Link
            href="/dining"
            className={getNavClasses('/dining') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/dining')}
          >
            {t('nav.dining')}
          </Link>
          <Link
            href="/gallery"
            className={getNavClasses('/gallery') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/gallery')}
          >
            {t('nav.gallery')}
          </Link>
          <Link
            href="/reviews"
            className={getNavClasses('/reviews') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/reviews')}
          >
            {t('nav.reviews')}
          </Link>
          <Link
            href="/contact"
            className={getNavClasses('/contact') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/contact')}
          >
            {t('nav.contact')}
          </Link>
          <Link
            href="/promotion"
            className={getNavClasses('/promotion') + ' text-xs md:text-base px-2 md:px-0'}
            style={getNavStyle('/promotion')}
          >
            {t('nav.promotions')}
          </Link>
        </div>
      </nav>
    </header>
  );
}
