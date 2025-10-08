import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-2xl border-b border-white/10 shadow-lg z-50">
      <div className="container-max section-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo width={140} height={45} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Benefícios
            </a>
            <a
              href="#process"
              className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Como Funciona
            </a>
            <a
              href="#why-choose"
              className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Por que escolher
            </a>
            <a
              href="#testimonials"
              className="text-white/90 hover:text-primary-500 font-medium transition-colors duration-200"
            >
              Depoimentos
            </a>

            {/* CTA Button */}
            <a
              href="#contact-form"
              className="bg-primary-500/90 hover:bg-primary-500 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-white/20"
            >
              Análise Gratuita
            </a>
          </div>

          {/* Mobile Menu Button - Static */}
          <div className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-6 h-0.5 bg-white/90 block transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-white/90 block mt-1 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-white/90 block mt-1 transition-all duration-300"></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
