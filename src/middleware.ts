import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define available locales
export const locales = ['en', 'de'];
export const defaultLocale = 'en';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // Make sure the correct locale is used even with incorrect paths
  localeDetection: true
});

export default function middleware(request: NextRequest) {
  // Special case: redirect root to default locale home
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Handle all other cases with the intl middleware
  return intlMiddleware(request);
}

// Configure the middleware matcher to only run on specific paths
export const config = {
  // Match only the root, specific locales, and paths that don't start with
  // api, _next, _vercel, and static files
  matcher: ['/', '/(de|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
