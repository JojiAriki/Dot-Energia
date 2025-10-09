const differentials = [
  {
    icon: '🧠',
    title: 'Expertise comprovada',
    description: 'Mais de 500+ clientes migrados com sucesso',
  },
  {
    icon: '🔒',
    title: 'Segurança e transparência',
    description: 'Contratos claros e acompanhamento completo',
  },
  {
    icon: '⚙️',
    title: 'Soluções personalizadas',
    description: 'Adaptadas ao consumo e perfil de cada empresa',
  },
  {
    icon: '💬',
    title: 'Atendimento humano',
    description: 'Suporte técnico e consultivo em todas as etapas',
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Por que escolher a DOT Energia?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Experiência, confiança e resultados comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {differentials.map((item, index) => (
            <div key={index}>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-secondary-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
