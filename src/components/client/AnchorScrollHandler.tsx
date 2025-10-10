'use client';

import { useEffect } from 'react';

type ScrollOptions = {
  hash: string;
  behavior?: ScrollBehavior;
};

const scrollToHash = ({ hash, behavior = 'smooth' }: ScrollOptions) => {
  if (!hash || hash === '#') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.querySelector(hash);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior, block: 'start' });
  }
};

export function AnchorScrollHandler() {
  useEffect(() => {
    const tryScroll = (hash: string) => {
      if (!hash) return;

      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToHash({ hash });
          history.replaceState(null, '', `${window.location.pathname}${hash}`);
        }, 80);
      });
    };

    const storedTarget = window.sessionStorage.getItem('dot-scroll-target');
    if (storedTarget) {
      window.sessionStorage.removeItem('dot-scroll-target');
      tryScroll(storedTarget);
    } else if (window.location.hash) {
      tryScroll(window.location.hash);
    }

    const handleHashChange = () => {
      tryScroll(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}
