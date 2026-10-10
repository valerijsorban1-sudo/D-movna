/**
 * Root-only locale routing using Netlify's geolocation (no external IP service).
 * A manually selected locale stored in a first-party cookie always wins.
 * Direct /cs/ and /en/ visits are never redirected.
 */
export default function localeRouter(request, { cookies, geo }) {
  const saved = cookies.get('drim_lang');
  const preferred = saved === 'cs' || saved === 'en' ? saved : null;
  const country = geo?.country?.code?.toUpperCase();
  let locale = preferred;

  if (!locale && country) {
    locale = country === 'CZ' || country === 'SK' ? 'cs' : 'en';
  }
  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language') || '';
    locale = /^(cs|sk)(-|,|;|$)/i.test(acceptLanguage) ? 'cs' : 'en';
  }

  return new URL(`/${locale}/`, request.url);
}
