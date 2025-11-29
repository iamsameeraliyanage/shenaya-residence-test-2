import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { RoomSelectionProvider } from '@/contexts/RoomSelectionContext';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shenaya Residence - Luxury Accommodation",
  description: "Experience luxury accommodation at Shenaya Residence. Book your stay with us for an unforgettable experience.",
};

// Define all supported locales for static generation
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

// Component props type definition
type PageProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

// The correct solution: params must be awaited in Next.js 15
export default async function LocaleLayout({ children, params }: PageProps) {
  // Await the params object first - this is required in Next.js 15
  const { locale } = await params;
  
  // Get messages for the specific locale
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <RoomSelectionProvider>
        {children}
      </RoomSelectionProvider>
    </NextIntlClientProvider>
  );
}
