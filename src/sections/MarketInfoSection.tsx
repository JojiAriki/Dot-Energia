export function MarketInfoSection() {
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

          {/* Image Area - Right Side */}
          <div className="relative lg:col-span-1">
            {/* Placeholder for image - Organic Shape */}
            <div
              className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                clipPath: 'ellipse(85% 90% at 50% 50%)',
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-15">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #00C11B 3px, transparent 3px),
                                     radial-gradient(circle at 75% 75%, #00C11B 2px, transparent 2px)`,
                    backgroundSize: '100px 100px',
                  }}
                ></div>
              </div>

              {/* Content overlay for image */}
              <div className="relative z-10 text-center p-8">
                <div
                  className="w-40 h-40 mx-auto mb-8 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                  style={{
                    borderRadius: '50% 40% 60% 30% / 40% 50% 30% 60%',
                  }}
                >
                  <div className="text-6xl">⚡</div>
                </div>

                <div className="space-y-3">
                  <div className="text-primary-700 font-medium text-xl">
                    Área preparada para
                  </div>
                  <div className="text-primary-800 font-bold text-2xl">
                    imagem do mercado
                  </div>
                  <div className="text-primary-600 text-sm opacity-80">
                    Formato orgânico e moderno
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400/60 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-300/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
