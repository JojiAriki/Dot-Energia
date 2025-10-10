import { useBasePath } from '@/hooks/useBasePath';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function HeroSection() {
  const { getImagePath } = useBasePath();

  return (
    <section
      id="home"
      className="fixed top-0 left-0 right-0 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getImagePath('images/hero/hero2.jpg')}')`,
        }}
      ></div>
      {/* Content */}
      <div className="container-max section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            Transforme sua empresa com{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
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
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col items-center gap-3 text-neutral-300 scroll-indicator cursor-pointer hover:text-primary-400 transition-colors duration-300">
              <span className="text-sm font-light tracking-wide">
                Role para baixo
              </span>
              <div className="w-6 h-10 border-2 border-primary-500/60 rounded-full flex justify-center p-1 relative hover:border-primary-400/80 transition-colors duration-300">
                <div className="w-1 h-3 bg-primary-500 rounded-full scroll-indicator-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
