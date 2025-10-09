'use client';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavigationLink({
  href,
  children,
  className = '',
}: NavigationLinkProps) {
  const handleClick = () => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
