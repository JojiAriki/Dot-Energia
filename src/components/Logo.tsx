'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'light' | 'dark';
}

export function Logo({
  className = '',
  width = 120,
  height = 40,
  variant = 'light',
}: LogoProps) {
  const logoSrc =
    variant === 'dark'
      ? '/images/logos/dot-energia-logo-white.svg'
      : '/images/logos/dot-energia-logo.svg';

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="DOT Energia - Soluções Inteligentes em Energia"
        width={width}
        height={height}
        className="object-contain"
        priority={true}
      />
    </div>
  );
}
