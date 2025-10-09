export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-secondary-50 to-white"
    >
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Lado Esquerdo - Informações */}
          <div className="space-y-8">
            {/* Título Principal */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
                Transforme seu futuro energético{' '}
                <span className="text-primary-500">agora!</span>
              </h2>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Descubra quanto sua empresa pode economizar com energia solar.
                Nossa análise gratuita revela o potencial de redução dos seus
                custos energéticos.
              </p>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Entre em contato
              </h3>

              {/* Telefone */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">
                    (11) 99999-9999
                  </p>
                  <p className="text-secondary-600 text-sm">
                    Atendimento comercial
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">
                    contato@dotenergia.com.br
                  </p>
                  <p className="text-secondary-600 text-sm">
                    Resposta em até 24h
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">
                    Rua das Energias Renováveis, 123
                  </p>
                  <p className="text-secondary-600">
                    Vila Sustentável - São Paulo, SP
                  </p>
                  <p className="text-secondary-600 text-sm">CEP: 01234-567</p>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-secondary-600 text-sm">
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Solicite sua análise gratuita
                </h3>
                <p className="text-secondary-600">
                  Preencha os dados abaixo e receba um estudo personalizado
                </p>
              </div>

              <form className="space-y-6">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="email@empresa.com"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                {/* Consumo */}
                <div>
                  <label
                    htmlFor="monthlyConsumption"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Consumo mensal aproximado (kWh)
                  </label>
                  <select
                    id="monthlyConsumption"
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="500-1000">500 a 1.000 kWh</option>
                    <option value="1000-5000">1.000 a 5.000 kWh</option>
                    <option value="5000-10000">5.000 a 10.000 kWh</option>
                    <option value="10000+">Acima de 10.000 kWh</option>
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
                <p className="text-xs text-secondary-500 text-center leading-relaxed">
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
