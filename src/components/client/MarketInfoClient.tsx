'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

interface MarketInfoClientProps {
  ctaText?: string;
}

export function MarketInfoClient({
  ctaText = 'Descubra seu potencial de economia',
}: MarketInfoClientProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-32 right-32 w-4 h-4 bg-primary-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-6 h-6 border-2 border-primary-400 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content Animations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="lg:col-span-1"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-8 leading-tight"
        >
          Liberdade para{' '}
          <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
            escolher
          </span>{' '}
          sua energia
        </motion.h2>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          <div className="text-xl font-light text-secondary-600 leading-relaxed">
            No{' '}
            <span className="font-semibold text-primary-600 relative">
              Mercado Livre de Energia
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600"></div>
            </span>
            , sua empresa ganha autonomia total para negociar energia,
            garantindo{' '}
            <span className="font-semibold text-secondary-800">
              economia real
            </span>{' '}
            e sustentabilidade.
          </div>

          <div className="bg-primary-50/50 border-l-4 border-primary-500 p-6 rounded-r-xl">
            <p className="text-lg text-secondary-700 leading-relaxed">
              <span className="font-semibold text-primary-700">
                Contratos inteligentes
              </span>{' '}
              adaptados ao seu perfil de consumo, com previsibilidade financeira
              e sustentabilidade em cada kilowatt consumido.
            </p>
          </div>

          {/* Key Points */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">
                  Economia Comprovada
                </h4>
                <p className="text-secondary-600">
                  Reduza até 30% dos custos com energia através de negociação
                  direta
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">
                  Energia 100% Renovável
                </h4>
                <p className="text-secondary-600">
                  Contribua para um futuro sustentável com energia limpa
                  certificada
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-1">
                  Migração Simplificada
                </h4>
                <p className="text-secondary-600">
                  Processo sem burocracia, sem investimento e sem interrupção
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {ctaText}
          </Button>
        </motion.div>
      </motion.div>

      {/* Image Area - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative lg:col-span-1"
      >
        {/* Placeholder for image - Organic Shape */}
        <div
          className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
          style={{
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            clipPath: 'ellipse(85% 90% at 50% 50%)',
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-15">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #00C11B 3px, transparent 3px),
                                 radial-gradient(circle at 75% 75%, #00C11B 2px, transparent 2px)`,
                backgroundSize: '100px 100px',
              }}
            ></div>
          </div>

          {/* Content overlay for image */}
          <div className="relative z-10 text-center p-8">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-40 h-40 mx-auto mb-8 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
              style={{
                borderRadius: '50% 40% 60% 30% / 40% 50% 30% 60%',
              }}
            >
              <div className="text-6xl">⚡</div>
            </motion.div>

            <div className="space-y-3">
              <div className="text-primary-700 font-medium text-xl">
                Área preparada para
              </div>
              <div className="text-primary-800 font-bold text-2xl">
                imagem do mercado
              </div>
              <div className="text-primary-600 text-sm opacity-80">
                Formato orgânico e moderno
              </div>
            </div>
          </div>

          {/* Subtle animated background elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-400/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="absolute top-3/4 right-1/3 w-2 h-2 bg-primary-500/40 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        {/* Minimal decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400/60 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-300/60 rounded-full"></div>
      </motion.div>
    </>
  );
}
