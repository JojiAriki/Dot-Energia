export function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: 'Economia até 30%',
      description:
        'Reduza significativamente os custos com energia elétrica da sua empresa através de contratos otimizados',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: '100% Renovável',
      description:
        'Energia limpa e certificada proveniente de fontes renováveis para um futuro sustentável',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Previsibilidade',
      description:
        'Contratos fixos que garantem estabilidade e previsibilidade nos custos energéticos',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      title: 'Sem Interrupção',
      description:
        'Migração sem burocracia, sem investimento inicial e sem risco para suas operações',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: 'ROI Garantido',
      description:
        'Retorno sobre investimento comprovado e imediato com economia real',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Segurança Total',
      description:
        'Fornecimento confiável com a mesma infraestrutura e garantia de continuidade',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-24 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Green decorative elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-300/10 rounded-full blur-2xl"></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C11B' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vantagens da{' '}
            <span className="text-primary-400 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
              DOT Energia
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Descubra como nossa solução em energia renovável pode transformar os
            resultados da sua empresa com benefícios comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 hover:border-primary-400/50 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/5 transition-all duration-500 rounded-3xl"></div>

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 text-white shadow-2xl group-hover:scale-110 group-hover:shadow-primary-500/60 transition-all duration-500">
                  {/* Inner glow effect */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>

                  {/* Icon container with enhanced styling */}
                  <div className="relative z-10 transform group-hover:rotate-12 transition-transform duration-500">
                    {benefit.icon}
                  </div>

                  {/* Outer ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-300/40 to-primary-700/40 blur-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary-500/20 rounded-full blur-lg group-hover:bg-primary-400/30 transition-colors duration-500"></div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
