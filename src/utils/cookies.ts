/**
 * Utilitários para gerenciamento de cookies e consentimento
 * Versão usando cookies HTTP reais
 */

export const cookieConsent = {
  /**
   * Obtém o status do consentimento de cookies
   */
  get: (): string | null => {
    if (typeof document === 'undefined') return null;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'cookie-consent') {
        return decodeURIComponent(value);
      }
    }
    return null;
  },

  /**
   * Define o status do consentimento de cookies
   * Expira em 1 ano
   */
  set: (value: 'accepted' | 'declined'): void => {
    if (typeof document === 'undefined') return;
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `cookie-consent=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  },

  /**
   * Verifica se o usuário aceitou os cookies
   */
  hasConsent: (): boolean => {
    return cookieConsent.get() === 'accepted';
  },

  /**
   * Remove o consentimento de cookies
   */
  clear: (): void => {
    if (typeof document === 'undefined') return;
    document.cookie =
      'cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  },

  /**
   * Verifica se já foi feita uma escolha sobre cookies
   */
  hasChoice: (): boolean => {
    return cookieConsent.get() !== null;
  },
};
