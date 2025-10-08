export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-secondary-50 to-white"
    >
      <div className="container-max section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
            Descubra seu potencial de economia
          </h2>
          <p className="text-lg text-secondary-600">
            Faça uma análise gratuita e veja quanto sua empresa pode economizar
            com energia renovável.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-primary-100">
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
                Ao enviar este formulário, você concorda em receber comunicações
                da DOT Energia. Seus dados estão seguros conosco.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
