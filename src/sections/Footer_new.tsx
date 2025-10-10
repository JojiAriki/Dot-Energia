import type { ContactInfoProps } from '@/types';
import { Logo } from '@/components/Logo';
import { NavigationLink } from '@/components/NavigationLink';
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactInfo: ContactInfoProps = {
  phone: '(16) 3996-5500',
  email: 'contato@dotenergia.com.br',
  address:
    'Av. Luiz Eduardo Toledo Prado, 800 – Vila do Golfe, Ribeirão Preto (Atendimento no Shopping Iguatemi Business, Sala 1012)',
  hours: 'Segunda a sexta, das 09h às 18h',
};

const quickLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Mercado', href: '#market-info' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Sustentabilidade', href: '#sustainability' },
  { name: 'Por que escolher', href: '#why-choose' },
  { name: 'Contato', href: '#contact-form' },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white overflow-hidden">
      {/* Gradiente de conexão no topo */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-secondary-900/50 to-secondary-950"></div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2 text-center md:text-left">
              <div className="mb-8 flex justify-center md:justify-start">
                <Logo width={200} height={60} variant="dark" />
              </div>
              <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed mx-auto md:mx-0">
                Transformamos o futuro energético das empresas com soluções
                inteligentes, sustentáveis e econômicas em energia renovável.
              </p>

              {/* Social Media */}
              <div className="flex gap-4 mb-8 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/company/dotenergia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/dotenergia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-6 text-white">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li
                    key={link.name}
                    className="flex justify-center md:justify-start"
                  >
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

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-6 text-white">Contato</h3>
              <div className="space-y-4 text-gray-300">
                <div className="group">
                  <div className="font-medium text-white mb-1 flex items-center justify-center md:justify-start">
                    <PhoneIcon className="w-4 h-4 mr-2 text-primary-500" />
                    Telefone:
                  </div>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="hover:text-primary-400 transition-colors block"
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                <div className="group">
                  <div className="font-medium text-white mb-1 flex items-center justify-center md:justify-start">
                    <EnvelopeIcon className="w-4 h-4 mr-2 text-primary-500" />
                    Email:
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary-400 transition-colors block"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <div className="font-medium text-white mb-1 flex items-center justify-center md:justify-start">
                    <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                    Horário:
                  </div>
                  <div>{contactInfo.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
              <div className="text-sm text-gray-400 text-center lg:text-left">
                © 2024 DOT Energia. Todos os direitos reservados. | CNPJ:
                00.000.000/0001-00
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm">
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
