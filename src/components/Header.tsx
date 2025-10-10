'use client';

import { useState, useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { NavigationLink } from '@/components/NavigationLink';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-secondary-950 backdrop-blur-2xl border-b border-gray-800 shadow-xl'
          : 'bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-lg'
      } ${isMobileMenuOpen ? 'min-h-fit' : ''}`}
    >
      <div className="container-max section-padding">
        <nav className="flex items-center justify-between py-4 min-h-[60px]">
          {/* Logo */}
          <Logo width={140} height={45} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavigationLink
              href="#home"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Início
            </NavigationLink>
            <NavigationLink
              href="#market-info"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Mercado
            </NavigationLink>
            <NavigationLink
              href="#benefits"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Início
            </NavigationLink>
            <NavigationLink
              href="#testimonials"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Depoimentos
            </NavigationLink>
            <NavigationLink
              href="#sustainability"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Sustentabilidade
            </NavigationLink>
            <NavigationLink
              href="#why-choose"
              className={`font-medium transition-colors duration-200 text-sm xl:text-base whitespace-nowrap ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Por que escolher
            </NavigationLink>

            {/* CTA Button */}
            <NavigationLink
              href="#contact-form"
              className={`font-semibold px-4 py-2 xl:px-6 xl:py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border text-sm xl:text-base whitespace-nowrap ${
                isScrolled
                  ? 'bg-primary-600 hover:bg-primary-700 text-white border-primary-500'
                  : 'bg-primary-500/90 hover:bg-primary-500 backdrop-blur-sm text-white border-white/20'
              }`}
            >
              Análise Gratuita
            </NavigationLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[48px] min-h-[48px]"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`w-6 h-0.5 block transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}
              ></span>
              <span
                className={`w-6 h-0.5 block mt-1 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`w-6 h-0.5 block mt-1 transition-all duration-300 ${
                  isScrolled ? 'bg-gray-300' : 'bg-white/90'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 border-t border-white/10'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3 pb-6">
            <NavigationLink
              href="#home"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Início
            </NavigationLink>
            <NavigationLink
              href="#market-info"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Mercado
            </NavigationLink>
            <NavigationLink
              href="#benefits"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Benefícios
            </NavigationLink>
            <NavigationLink
              href="#testimonials"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Depoimentos
            </NavigationLink>
            <NavigationLink
              href="#sustainability"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Sustentabilidade
            </NavigationLink>
            <NavigationLink
              href="#why-choose"
              onClick={closeMobileMenu}
              className={`font-medium transition-colors duration-200 py-3 px-2 min-h-[44px] flex items-center ${
                isScrolled
                  ? 'text-gray-300 hover:text-primary-400'
                  : 'text-white/90 hover:text-primary-500'
              }`}
            >
              Por que escolher
            </NavigationLink>

            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <NavigationLink
                href="#contact-form"
                onClick={closeMobileMenu}
                className={`text-center font-semibold px-6 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border min-h-[52px] flex items-center justify-center ${
                  isScrolled
                    ? 'bg-primary-600 hover:bg-primary-700 text-white border-primary-500'
                    : 'bg-primary-500/90 hover:bg-primary-500 backdrop-blur-sm text-white border-white/20'
                }`}
              >
                Análise Gratuita
              </NavigationLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
