import {
  AcademicCapIcon,
  ShieldCheckIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const differentials = [
  {
    icon: <AcademicCapIcon className="w-16 h-16 text-primary-500" />,
    title: 'Expertise comprovada',
    description: 'Mais de 500+ clientes migrados com sucesso',
  },
  {
    icon: <ShieldCheckIcon className="w-16 h-16 text-primary-500" />,
    title: 'Segurança e transparência',
    description: 'Contratos claros e acompanhamento completo',
  },
  {
    icon: <CogIcon className="w-16 h-16 text-primary-500" />,
    title: 'Soluções personalizadas',
    description: 'Adaptadas ao consumo e perfil de cada empresa',
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-16 h-16 text-primary-500" />,
    title: 'Atendimento humano',
    description: 'Suporte técnico e consultivo em todas as etapas',
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-20 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 z-10 relative"
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que escolher a DOT Energia?
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Experiência, confiança e resultados comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {differentials.map((item, index) => (
            <div key={index}>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-300">{item.description}</p>
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
