'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { NavigationLink } from '@/components/NavigationLink';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Offset para começar a transição antes
        setIsScrolled(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary-950 backdrop-blur-2xl border-b border-gray-800 shadow-xl'
          : 'bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-lg'
      }`}
    >
      <div className="container-max section-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo width={140} height={45} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationLink
              href="#benefits"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Benefícios
            </NavigationLink>
            <NavigationLink
              href="#process"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Como Funciona
            </NavigationLink>
            <NavigationLink
              href="#why-choose"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Por que escolher
            </NavigationLink>
            <NavigationLink
              href="#testimonials"
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Depoimentos
            </NavigationLink>

            {/* CTA Button */}
            <NavigationLink
              href="#contact-form"
              className={`font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border ${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white border-primary-500'
                  : 'bg-primary-500/90 hover:bg-primary-500 backdrop-blur-sm text-white border-white/20'
              }`}
            >
              Análise Gratuita
            </NavigationLink>
          </div>

          {/* Mobile Menu Button - Static */}
          <div className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-6 h-0.5 block transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 block mt-1 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 block mt-1 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                }`}
              ></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
