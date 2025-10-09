import type { ContactInfoProps } from '@/types';
import { Logo } from '@/components/Logo';
import { NavigationLink } from '@/components/NavigationLink';

const contactInfo: ContactInfoProps = {
  phone: '(16) 3996-5500',
  email: 'contato@dotenergia.com.br',
  address:
    'Av. Luiz Eduardo Toledo Prado, 800 – Vila do Golfe, Ribeirão Preto (Atendimento no Shopping Iguatemi Business, Sala 1012)',
  hours: 'Segunda a sexta, das 09h às 18h',
};

const quickLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Como Funciona', href: '#process' },
  { name: 'Sustentabilidade', href: '#sustainability' },
  { name: 'Contato', href: '#contact-form' },
];

const services = [
  { name: 'Energia Solar', href: '#energia-solar' },
  { name: 'Eficiência Energética', href: '#eficiencia' },
  { name: 'Consultoria', href: '#consultoria' },
  { name: 'Gestão de Energia', href: '#gestao' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent-500 rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="h-full w-full">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Logo width={200} height={60} variant="dark" />
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Transformamos o futuro energético das empresas com soluções
                inteligentes, sustentáveis e econômicas em energia renovável.
              </p>

              {/* Social Media */}
              <div className="flex gap-4 mb-8">
                <a
                  href="https://linkedin.com/company/dotenergia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dotenergia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C8.396 0 7.989.016 6.756.071 5.524.126 4.684.265 3.925.502c-.789.247-1.459.576-2.126 1.243C.132 2.412-.197 3.082-.444 3.87c-.237.759-.376 1.599-.431 2.831C-.016 7.934 0 8.341 0 11.962c0 3.621.016 4.028.071 5.261.055 1.232.194 2.072.431 2.831.247.789.576 1.459 1.243 2.126.667.667 1.337.996 2.126 1.243.759.237 1.599.376 2.831.431C7.989 23.984 8.396 24 12.017 24c3.621 0 4.028-.016 5.261-.071 1.232-.055 2.072-.194 2.831-.431.789-.247 1.459-.576 2.126-1.243.667-.667.996-1.337 1.243-2.126.237-.759.376-1.599.431-2.831C23.984 16.028 24 15.621 24 11.962c0-3.621-.016-4.028-.071-5.261-.055-1.232-.194-2.072-.431-2.831-.247-.789-.576-1.459-1.243-2.126C21.588.132 20.918-.197 20.13-.444c-.759-.237-1.599-.376-2.831-.431C16.066-.016 15.659 0 12.038 0h-.021zm-.104 2.163h.108c3.586 0 4.012.014 5.426.066 1.31.06 2.022.28 2.496.464.628.245 1.077.537 1.548 1.008.471.471.763.92 1.008 1.548.184.474.404 1.186.464 2.496.052 1.414.066 1.84.066 5.426 0 3.586-.014 4.012-.066 5.426-.06 1.31-.28 2.022-.464 2.496-.245.628-.537 1.077-1.008 1.548-.471.471-.92.763-1.548 1.008-.474.184-1.186.404-2.496.464-1.414.052-1.84.066-5.426.066-3.586 0-4.012-.014-5.426-.066-1.31-.06-2.022-.28-2.496-.464-.628-.245-1.077-.537-1.548-1.008-.471-.471-.763-.92-1.008-1.548-.184-.474-.404-1.186-.464-2.496-.052-1.414-.066-1.84-.066-5.426 0-3.586.014-4.012.066-5.426.06-1.31.28-2.022.464-2.496.245-.628.537-1.077 1.008-1.548.471-.471.92-.763 1.548-1.008.474-.184 1.186-.404 2.496-.464 1.237-.056 1.716-.07 4.526-.07l.001-.001zm9.089 3.778c-.893 0-1.616-.723-1.616-1.616s.723-1.616 1.616-1.616 1.616.723 1.616 1.616-.723 1.616-1.616 1.616zm-4.985 1.304c-3.754 0-6.798 3.044-6.798 6.798 0 3.754 3.044 6.798 6.798 6.798 3.754 0 6.798-3.044 6.798-6.798 0-3.754-3.044-6.798-6.798-6.798zm0 2.163c2.549 0 4.635 2.086 4.635 4.635 0 2.549-2.086 4.635-4.635 4.635-2.549 0-4.635-2.086-4.635-4.635 0-2.549 2.086-4.635 4.635-4.635z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5516999655000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <NavigationLink
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </NavigationLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Serviços</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 group flex items-center"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-xl mb-6 text-white">Contato</h3>
              <div className="space-y-4 text-gray-300">
                <div className="group">
                  <div className="font-medium text-white mb-1 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Telefone:
                  </div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="group">
                  <div className="font-medium text-white mb-1 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email:
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <div className="font-medium text-white mb-1 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Horário:
                  </div>
                  <div>{contactInfo.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-sm text-gray-400 text-center lg:text-left">
                © 2024 DOT Energia. Todos os direitos reservados. | CNPJ:
                00.000.000/0001-00
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="/politica-privacidade"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  Política de Privacidade
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="/termos-uso"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  Termos de Uso
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  Política de Cookies
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
