'use client';

import { useCallback } from 'react';
import { useBasePath } from '@/hooks/useBasePath';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const normalizePath = (path: string | undefined) => {
  if (!path || path === '') return '/';
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

export function NavigationLink({
  href,
  children,
  className = '',
  onClick,
}: NavigationLinkProps) {
  const { basePath } = useBasePath();
  const homePath = normalizePath(basePath || '/');
  const homeHref = basePath && basePath !== '' ? basePath : '/';

  const handleClick = useCallback(() => {
    if (typeof window === 'undefined') return;

    const currentPath = normalizePath(window.location.pathname);
    const isAnchor = href.startsWith('#');

    if (!isAnchor) {
      window.location.href = href;
      onClick?.();
      return;
    }

    if (currentPath !== homePath) {
      if (isAnchor) {
        const targetHash = href === '#home' ? '' : href;
        try {
          if (targetHash) {
            window.sessionStorage.setItem('dot-scroll-target', targetHash);
          } else {
            window.sessionStorage.removeItem('dot-scroll-target');
          }
        } catch (error) {
          console.warn('Failed to persist scroll target', error);
        }
        window.location.href = homeHref;
      } else {
        window.location.href = href;
      }
      onClick?.();
      return;
    }

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    onClick?.();
  }, [href, homeHref, homePath, onClick]);

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
