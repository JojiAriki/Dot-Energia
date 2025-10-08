'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

interface HeroClientProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
}

export function HeroClient({
  title = 'Transforme sua empresa com energia inteligente',
  subtitle = 'Reduza custos em até 30% e contribua para um futuro sustentável com energia 100% renovável',
  ctaText = 'Análise Gratuita',
  secondaryCtaText = 'Como Funciona',
}: HeroClientProps) {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const formElement = document.getElementById('process');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-secondary-900 leading-tight mb-8"
      >
        Transforme sua empresa com{' '}
        <span className="text-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
          energia inteligente
        </span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="text-2xl md:text-3xl text-secondary-600 mb-16 font-light leading-relaxed max-w-4xl mx-auto"
      >
        Reduza custos em até{' '}
        <span className="font-semibold text-primary-600">30%</span> e contribua
        para um futuro sustentável com energia 100% renovável
      </motion.p>

      {/* Botões de ação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Button
          onClick={scrollToForm}
          size="lg"
          className="text-xl px-12 py-6 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          {ctaText}
        </Button>

        <Button
          variant="secondary"
          onClick={scrollToProcess}
          size="lg"
          className="text-xl px-12 py-6 font-semibold hover:bg-secondary-100 transform hover:scale-105 transition-all duration-300"
        >
          {secondaryCtaText}
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
