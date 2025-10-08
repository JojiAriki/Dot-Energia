import type { ContactInfoProps } from '@/types';
import { Logo } from '@/components/Logo';

const contactInfo: ContactInfoProps = {
  phone: '(16) 3996-5500',
  address:
    'Av. Luiz Eduardo Toledo Prado, 800 – Vila do Golfe, Ribeirão Preto (Atendimento no Shopping Iguatemi Business, Sala 1012)',
  hours: 'Segunda a sexta, das 09h às 18h',
};

export function Footer() {
  return (
    <footer className="bg-secondary-950 text-white py-16">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo width={160} height={50} variant="dark" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Soluções inteligentes em energia para empresas que buscam
              economia, sustentabilidade e eficiência.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm">ig</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Fale conosco</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium">Telefone:</div>
                <div>{contactInfo.phone}</div>
              </div>
              <div>
                <div className="font-medium">Horário:</div>
                <div>{contactInfo.hours}</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Localização</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 DOT Energia. Todos os direitos reservados.
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
