import ContactFormClient from '@/components/client/ContactFormClient';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 z-10 relative scroll-mt-10"
    >
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Vamos trabalhar juntos para criar{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              o negócio e a vida
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">
              Envie uma Mensagem
            </h3>
            <p className="text-neutral-300 mb-8">
              Desbloqueie seu potencial com orientação especializada! Agende uma
              consulta gratuita para o sucesso pessoal e empresarial.
            </p>
            <ContactFormClient />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Informações de Contato
            </h3>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-primary-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  Ligue para Nós
                </h4>
                <p className="text-neutral-300 text-sm mb-2">
                  Entre em contato hoje para coaching personalizado e
                  crescimento transformador!
                </p>
                <a
                  href="tel:+5511999999999"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  +55 11 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-primary-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  Envie um Email
                </h4>
                <p className="text-neutral-300 text-sm mb-2">
                  Envie-nos um email agora para coaching especializado e
                  soluções de crescimento personalizadas!
                </p>
                <a
                  href="mailto:contato@dotenergia.com.br"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors break-all"
                >
                  contato@dotenergia.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-primary-400" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">
                  Visite-nos
                </h4>
                <p className="text-neutral-300 text-sm mb-2">
                  Visite-nos para coaching personalizado e orientação para o
                  sucesso duradouro!
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  São Paulo, SP - Brasil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
