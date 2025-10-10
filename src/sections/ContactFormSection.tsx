import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 z-10 relative scroll-mt-10"
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Lado Esquerdo - Informações */}
          <div className="space-y-8">
            {/* Título Principal */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transforme seu futuro energético{' '}
                <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  agora!
                </span>
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Descubra quanto sua empresa pode economizar com energia solar.
                Nossa análise gratuita revela o potencial de redução dos seus
                custos energéticos.
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Entre em contato
              </h3>

              {/* Telefone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">(11) 99999-9999</p>
                  <p className="text-neutral-300 text-sm">
                    Atendimento comercial
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    contato@dotenergia.com.br
                  </p>
                  <p className="text-neutral-300 text-sm">
                    Resposta em até 24h
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Rua das Energias Renováveis, 123
                  </p>
                  <p className="text-neutral-300">
                    Vila Sustentável - São Paulo, SP
                  </p>
                  <p className="text-neutral-300 text-sm">CEP: 01234-567</p>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-neutral-300 text-sm">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Solicite sua análise gratuita
                </h3>
                <p className="text-neutral-300">
                  Preencha os dados abaixo e receba um estudo personalizado
                </p>
              </div>

              <form className="space-y-6">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="email@empresa.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-neutral-400 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                {/* Consumo */}
                <div>
                  <label
                    htmlFor="monthlyConsumption"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Consumo mensal aproximado (kWh)
                  </label>
                  <select
                    id="monthlyConsumption"
                    className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="" className="text-gray-900">
                      Selecione uma opção
                    </option>
                    <option value="500-1000" className="text-gray-900">
                      500 a 1.000 kWh
                    </option>
                    <option value="1000-5000" className="text-gray-900">
                      1.000 a 5.000 kWh
                    </option>
                    <option value="5000-10000" className="text-gray-900">
                      5.000 a 10.000 kWh
                    </option>
                    <option value="10000+" className="text-gray-900">
                      Acima de 10.000 kWh
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Solicitar Análise Gratuita
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-neutral-400 text-center leading-relaxed">
                  Ao enviar este formulário, você concorda em receber
                  comunicações da DOT Energia. Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
