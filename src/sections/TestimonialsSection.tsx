'use client';

import { useBasePath } from '@/hooks/useBasePath';

export function TestimonialsSection() {
  const { getImagePath } = useBasePath();

  // Logos dos clientes
  const clientLogos = [
    { id: 1, src: getImagePath('images/clienteLogo/4.png'), alt: 'Cliente 4' },
    { id: 2, src: getImagePath('images/clienteLogo/6.png'), alt: 'Cliente 6' },
    { id: 3, src: getImagePath('images/clienteLogo/7.png'), alt: 'Cliente 7' },
    { id: 4, src: getImagePath('images/clienteLogo/9.png'), alt: 'Cliente 9' },
    {
      id: 5,
      src: getImagePath('images/clienteLogo/10.png'),
      alt: 'Cliente 10',
    },
    {
      id: 6,
      src: getImagePath('images/clienteLogo/12.png'),
      alt: 'Cliente 12',
    },
    {
      id: 7,
      src: getImagePath('images/clienteLogo/13.png'),
      alt: 'Cliente 13',
    },
    {
      id: 8,
      src: getImagePath('images/clienteLogo/14.png'),
      alt: 'Cliente 14',
    },
    {
      id: 9,
      src: getImagePath('images/clienteLogo/15.png'),
      alt: 'Cliente 15',
    },
    {
      id: 10,
      src: getImagePath('images/clienteLogo/17.png'),
      alt: 'Cliente 17',
    },
    {
      id: 11,
      src: getImagePath('images/clienteLogo/20.png'),
      alt: 'Cliente 20',
    },
    {
      id: 12,
      src: getImagePath('images/clienteLogo/23.png'),
      alt: 'Cliente 23',
    },
    {
      id: 13,
      src: getImagePath('images/clienteLogo/28.png'),
      alt: 'Cliente 28',
    },
  ];

  // Dividir logos em duas linhas
  const firstRowLogos = clientLogos.slice(0, 7);
  const secondRowLogos = clientLogos.slice(7);
  return (
    <section
      id="testimonials"
      className="relative bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empresas que{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              confiam
            </span>{' '}
            na DOT Energia
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Mais de 500 empresas já economizam até 30% nos custos de energia com
            nossa solução sustentável
          </p>
        </div>

        {/* First Row - Moving Right */}
        <div className="mb-8 overflow-hidden w-full">
          <div className="flex animate-scroll-right whitespace-nowrap w-max">
            {/* Duplicamos os logos para animação contínua */}
            {[...firstRowLogos, ...firstRowLogos, ...firstRowLogos].map(
              (logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-5"
                >
                  <div className="flex items-center justify-center h-20 lg:h-24 px-4 lg:px-6">
                    <div className="bg-transparent backdrop-blur-sm p-3 lg:p-4 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary-200/50 transition-all duration-300 group">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 lg:h-12 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="mb-16 overflow-hidden w-full">
          <div className="flex animate-scroll-left whitespace-nowrap w-max">
            {/* Duplicamos os logos para animação contínua */}
            {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map(
              (logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-3 lg:mx-5"
                >
                  <div className="flex items-center justify-center h-20 lg:h-24 px-4 lg:px-6">
                    <div className="bg-transparent backdrop-blur-sm p-3 lg:p-4 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary-200/50 transition-all duration-300 group">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 lg:h-12 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
