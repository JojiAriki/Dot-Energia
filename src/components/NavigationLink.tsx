'use client';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavigationLink({
  href,
  children,
  className = '',
  onClick,
}: NavigationLinkProps) {
  const handleClick = () => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Chama o onClick adicional se fornecido
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
