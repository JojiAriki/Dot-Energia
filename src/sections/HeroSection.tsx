'use client';

import { useBasePath } from '@/hooks/useBasePath';

export function HeroSection() {
  const { getImagePath } = useBasePath();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getImagePath('images/hero/hero.jpg')}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/70 via-secondary-800/60 to-primary-900/50"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-8 tracking-tight drop-shadow-lg">
            Transforme sua empresa com{' '}
            <span className="text-primary-500 drop-shadow-sm">
              energia inteligente
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-neutral-100 mb-8 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-md">
            Reduza custos em até{' '}
            <span className="font-semibold text-primary-500">30%</span> e
            contribua para um futuro sustentável com energia 100% renovável
          </p>

          {/* CTA Button - Enhanced */}
          <div className="mb-12">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-primary-500"
            >
              <span>Análise Gratuita</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2 drop-shadow-lg">
                30%
              </div>
              <div className="text-sm md:text-base text-neutral-200">
                Economia média
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2 drop-shadow-lg">
                100%
              </div>
              <div className="text-sm md:text-base text-neutral-200">
                Energia renovável
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2 drop-shadow-lg">
                24h
              </div>
              <div className="text-sm md:text-base text-neutral-200">
                Resposta da análise
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-neutral-300">
              <span className="text-sm font-light">Role para baixo</span>
              <div className="w-6 h-10 border-2 border-primary-500/60 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
