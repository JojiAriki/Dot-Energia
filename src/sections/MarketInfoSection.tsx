import { useBasePath } from '@/hooks/useBasePath';
import {
  CurrencyDollarIcon,
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export function MarketInfoSection() {
  const { getImagePath } = useBasePath();

  return (
    <section className="relative py-24 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-whiteoverflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max section-padding relative">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-relaxed">
              Liberdade para{' '}
              <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-500 bg-clip-text text-transparent">
                escolher{' '}
              </span>
              sua energia
            </h2>

            {/* Enhanced Description */}
            <div className="space-y-8 mb-12">
              <div className="text-xl font-light text-neutral-300 leading-relaxed">
                No{' '}
                <span className="font-semibold text-primary-600 relative">
                  Mercado Livre de Energia
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                </span>
                , sua empresa ganha autonomia total para negociar energia,
                garantindo{' '}
                <span className="font-semibold text-neutral-100">
                  economia real
                </span>{' '}
                e sustentabilidade.
                <span>
                  Contratos inteligentes adaptados ao seu perfil de consumo, com{' '}
                  {''}
                  <span className="font-semibold text-neutral-100">
                    previsibilidade financeira
                  </span>{' '}
                  e sustentabilidade em cada kilowatt consumido.
                </span>
              </div>
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="w-12 h-12" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-100 mb-2 text-lg">
                      Economia Comprovada
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      Reduza até 30% dos custos com energia através de
                      negociação direta no mercado livre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <BoltIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-100 mb-2 text-lg">
                      Energia 100% Renovável
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      Contribua para um futuro sustentável com energia limpa
                      certificada e rastreável
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-100 mb-2 text-lg">
                      Migração Simplificada
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      Processo sem burocracia, sem investimento inicial e sem
                      interrupção no fornecimento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span>Descubra seu potencial de economia</span>
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image Area - Right Side: replace placeholder with homem.png */}
          <div className="relative lg:col-span-2 flex items-center justify-center">
            {/* Main Image Container with Enhanced Effects */}
            <div className="relative w-full max-w-[800px] z-10">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 transform scale-105"></div>

              {/* Image */}
              <img
                src={getImagePath('images/homem.png')}
                alt="Homem"
                className="relative w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
