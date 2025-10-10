'use client';

import Image from 'next/image';
import { useBasePath } from '@/hooks/useBasePath';
import { NavigationLink } from './NavigationLink';

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
  const { getImagePath } = useBasePath();

  const logoSrc =
    variant === 'dark'
      ? getImagePath('images/logos/dot-energia-logo-white.svg')
      : getImagePath('images/logos/dot-energia-logo.svg');

  return (
    <div className={`flex items-center ${className}`}>
      <a
        href="#home"
        aria-label="DOT Energia - Soluções Inteligentes em Energia"
      ></a>

      <NavigationLink href="#home" className="">
        <Image
          src={logoSrc}
          alt="DOT Energia - Soluções Inteligentes em Energia"
          width={width}
          height={height}
          className="object-contain"
          priority={true}
        />
      </NavigationLink>
    </div>
  );
}
