import { useBasePath } from '@/hooks/useBasePath';

export function MarketInfoSection() {
  const { getImagePath } = useBasePath();

  return (
    <section className="relative py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-1">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-8 leading-tight">
              Liberdade para{' '}
              <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-500 bg-clip-text text-transparent">
                escolher
              </span>{' '}
              sua energia
            </h2>

            {/* Enhanced Description */}
            <div className="space-y-8 mb-12">
              <div className="text-xl font-light text-secondary-600 leading-relaxed">
                No{' '}
                <span className="font-semibold text-primary-600 relative">
                  Mercado Livre de Energia
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                </span>
                , sua empresa ganha autonomia total para negociar energia,
                garantindo{' '}
                <span className="font-semibold text-secondary-800">
                  economia real
                </span>{' '}
                e sustentabilidade.
                <span>
                  Contratos inteligentes adaptados ao seu perfil de consumo, com
                  <span className="font-semibold text-secondary-800">
                    previsibilidade financeira
                  </span>{' '}
                  e sustentabilidade em cada kilowatt consumido.
                </span>
              </div>
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-2 text-lg">
                      Economia Comprovada
                    </h4>
                    <p className="text-secondary-600 leading-relaxed">
                      Reduza até 30% dos custos com energia através de
                      negociação direta no mercado livre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-2 text-lg">
                      Energia 100% Renovável
                    </h4>
                    <p className="text-secondary-600 leading-relaxed">
                      Contribua para um futuro sustentável com energia limpa
                      certificada e rastreável
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 text-primary-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-2 text-lg">
                      Migração Simplificada
                    </h4>
                    <p className="text-secondary-600 leading-relaxed">
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
          </div>

          {/* Image Area - Right Side: replace placeholder with homem.png */}
          <div className="relative lg:col-span-1 flex items-center justify-center">
            <div className="w-full max-w-[600px] p-4">
              <img
                src={getImagePath('images/homem.png')}
                alt="Homem"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
