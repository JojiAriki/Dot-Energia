'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const floatingElements = [
  {
    delay: 0,
    duration: 6,
    className: 'top-10 left-6 h-20 w-20 bg-primary-500',
  },
  {
    delay: 1.2,
    duration: 7.5,
    className: 'bottom-16 right-10 h-24 w-24 bg-primary-600',
  },
  {
    delay: 2.4,
    duration: 8,
    className: 'top-1/2 right-1/3 h-16 w-16 bg-accent-500',
  },
];

const sparkles = Array.from({ length: 20 }, (_, index) => ({
  delay: index * 0.2,
  duration: 3 + (index % 5) * 0.3,
}));

export function NotFoundScene() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 text-white">
      <div className="container-max section-padding relative z-10 flex min-h-[80vh] flex-col justify-center py-32">
        <div className="mb-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-200 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-primary-400" />
          Página não encontrada
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                >
                  404 Error
                </motion.span>
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                >
                  Energia fora de órbita
                </motion.span>
              </div>

              <motion.h1
                className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Opa! Essa energia não está disponível aqui.
              </motion.h1>

              <motion.p
                className="max-w-2xl text-lg text-white/80"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                Parece que a página que você tentou acessar entrou em modo
                economia. Mas não se preocupe: temos várias rotas para colocar
                você de volta nos trilhos rumo à eficiência energética.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/40"
              >
                Voltar para o início
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: 'easeInOut',
                  }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-primary-400 hover:bg-primary-500/20"
              >
                Falar com a equipe
                <span aria-hidden className="text-lg">
                  💬
                </span>
              </Link>
            </motion.div>

            <div className="grid gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-3">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
                  O que pode ter acontecido
                </p>
                <p className="text-sm text-white/80">
                  O link expirou, foi digitado incorretamente ou sofre um pico
                  inesperado.
                </p>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35, duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
                  Para onde ir agora
                </p>
                <p className="text-sm text-white/80">
                  Explore nossos serviços no menu acima ou entre em contato para
                  um atendimento personalizado.
                </p>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
                  Dica rápida
                </p>
                <p className="text-sm text-white/80">
                  Use o ícone do WhatsApp no canto para falar com um
                  especialista em poucos segundos.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative mx-auto flex h-full w-full max-w-md items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative aspect-square w-full max-w-sm rounded-[3rem] bg-secondary-950/80 p-8 backdrop-blur-xl shadow-[0_30px_120px_-20px_rgba(16,16,45,0.9)]">
              <motion.div
                className="absolute inset-0 rounded-[3rem] border border-white/15"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="relative flex h-full flex-col items-center justify-center gap-4 text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <motion.div
                  className="flex items-baseline gap-2 text-[4.5rem] font-black tracking-tight text-white sm:text-[5.5rem]"
                  animate={{
                    y: [0, -6, 0],
                    textShadow: [
                      '0px 0px 12px rgba(59,130,246,0.45)',
                      '0px 0px 24px rgba(59,130,246,0.6)',
                      '0px 0px 12px rgba(59,130,246,0.45)',
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.6,
                    ease: 'easeInOut',
                  }}
                >
                  <span>4</span>
                  <motion.span
                    className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-secondary-950 shadow-lg shadow-primary-600/40 sm:h-28 sm:w-28"
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.8,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.span
                      className="absolute inset-3 rounded-full border-2 border-white/50"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.4,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.span
                      className="text-4xl text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: 'easeInOut',
                      }}
                    >
                      ⚡
                    </motion.span>
                  </motion.span>
                  <span>4</span>
                </motion.div>

                <motion.p
                  className="max-w-xs text-sm text-white/70"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.2,
                    ease: 'easeInOut',
                  }}
                >
                  A energia certa sempre encontra o caminho. Vamos te
                  redirecionar.
                </motion.p>
              </motion.div>

              {floatingElements.map(({ delay, duration, className }) => (
                <motion.span
                  key={className}
                  className={`absolute rounded-full blur-3xl opacity-70 ${className}`}
                  animate={{
                    y: [0, -16, 0],
                    x: [0, 12, -8, 0],
                    opacity: [0.35, 0.6, 0.35],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration,
                    ease: 'easeInOut',
                    delay,
                  }}
                />
              ))}

              {sparkles.map(({ delay, duration }, index) => (
                <motion.span
                  key={index}
                  className="pointer-events-none absolute h-1 w-1 rounded-full bg-white"
                  style={{
                    top: `${20 + ((index * 13) % 80)}%`,
                    left: `${15 + ((index * 17) % 70)}%`,
                  }}
                  animate={{ opacity: [0, 0.9, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration,
                    delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18)_0%,_transparent_55%)]" />
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        <motion.div
          className="absolute bottom-10 left-1/4 h-32 w-32 rounded-full border border-white/10"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-20 right-10 h-40 w-40 rounded-full border border-white/10"
          animate={{ scale: [1, 1.05, 1], rotate: [0, -6, 6, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
