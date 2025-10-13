'use client';

import { useState, useEffect } from 'react';
import { cookieConsent } from '@/utils/cookies';

export default function CookiePreferences() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(cookieConsent.get());
  }, []);

  const handleAccept = () => {
    cookieConsent.set('accepted');
    setConsent('accepted');
  };

  const handleDecline = () => {
    cookieConsent.set('declined');
    setConsent('declined');
  };

  const handleReset = () => {
    cookieConsent.clear();
    setConsent(null);
    window.location.reload();
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
        Gerenciar Preferências de Cookies
      </h3>

      <div className="mb-6">
        <p className="text-sm text-secondary-600 mb-2">Status atual:</p>
        <div className="flex items-center gap-2">
          {consent === 'accepted' && (
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              ✓ Cookies Aceitos
            </span>
          )}
          {consent === 'declined' && (
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              ✗ Cookies Recusados
            </span>
          )}
          {!consent && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              Nenhuma preferência definida
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleAccept}
          disabled={consent === 'accepted'}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors"
        >
          Aceitar Cookies
        </button>
        <button
          onClick={handleDecline}
          disabled={consent === 'declined'}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
        >
          Recusar Cookies
        </button>
        {consent && (
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Resetar
          </button>
        )}
      </div>

      <p className="mt-4 text-xs text-secondary-500">
        Ao alterar suas preferências, a página será recarregada para aplicar as
        mudanças.
      </p>
    </div>
  );
}
