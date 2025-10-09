export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Análise Gratuita',
      description:
        'Analisamos seu perfil de consumo e identificamos o potencial de economia',
    },
    {
      number: '02',
      title: 'Proposta Personalizada',
      description:
        'Apresentamos uma solução customizada para suas necessidades específicas',
    },
    {
      number: '03',
      title: 'Migração Simplificada',
      description: 'Cuidamos de toda a burocracia e documentação necessária',
    },
    {
      number: '04',
      title: 'Economia Imediata',
      description: 'Você começa a economizar sem interrupção no fornecimento',
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 z-10 relative"
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Como funciona nossa solução
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Um processo simples e transparente para transformar a gestão
            energética da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white font-bold text-xl rounded-full mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
