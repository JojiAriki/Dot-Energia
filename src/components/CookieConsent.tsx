'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cookieConsent } from '@/utils/cookies';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = cookieConsent.get();
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    cookieConsent.set('accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    cookieConsent.set('declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg animate-slide-up">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-gray-700 leading-relaxed">
              🍪 Utilizamos cookies para melhorar sua experiência em nosso site.
              Ao continuar navegando, você concorda com nossa{' '}
              <Link
                href="/politica-privacidade"
                className="text-green-600 hover:text-green-700 underline font-medium"
              >
                Política de Privacidade
              </Link>
              {' e '}
              <Link
                href="/cookies"
                className="text-green-600 hover:text-green-700 underline font-medium"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg transition-colors hover:bg-gray-50"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
