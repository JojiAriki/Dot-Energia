export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-300/40 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary-300/25 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-emerald-200/35 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-green-100/25 rounded-full blur-3xl"></div>
      </div>
      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 leading-tight">
                Energia 100% renovável para economia com propósito
              </h2>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Transforme os resultados da sua empresa com energia limpa e
                certificada
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-secondary-700 leading-relaxed">
                Ao migrar com a DOT Energia, sua empresa utiliza energia de
                fontes limpas e certificadas, reduzindo emissões de carbono e
                contribuindo para um futuro sustentável.
              </p>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Além da economia financeira, você fortalece sua marca e acelera
                suas metas ESG com impacto real no meio ambiente.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-secondary-600">Energia renovável</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  Zero
                </div>
                <div className="text-secondary-600">Emissões de CO</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2"></div>
                <div className="text-secondary-600">Certificação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ESG
                </div>
                <div className="text-secondary-600">Metas cumpridas</div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[500px]">
            <div
              className="w-80 h-80 bg-gradient-to-br from-primary-400/20 via-green-400/20 to-emerald-400/20 blur-sm"
              style={{
                borderRadius: `60% 40% 30% 70% / 60% 30% 70% 40%`,
                animation: `morph 8s ease-in-out infinite`,
              }}
            ></div>
            <div
              className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-green-300/30 via-primary-300/30 to-emerald-300/30 blur-sm"
              style={{
                borderRadius: `30% 70% 70% 30% / 30% 30% 70% 70%`,
                animation: `morph 8s ease-in-out infinite reverse`,
                animationDelay: `2s`,
              }}
            ></div>
            <div
              className="absolute top-10 right-10 w-12 h-12 bg-primary-400/40 blur-sm animate-bounce"
              style={{
                borderRadius: `60% 40% 30% 70%`,
                animationDelay: `0.5s`,
                animationDuration: `2s`,
              }}
            ></div>
            <div
              className="absolute bottom-20 left-8 w-8 h-8 bg-green-400/50 blur-sm animate-pulse"
              style={{
                borderRadius: `70% 30% 60% 40%`,
                animationDelay: `1s`,
              }}
            ></div>
            <div
              className="absolute top-1/3 left-0 w-16 h-16 bg-emerald-300/30 blur-sm animate-bounce"
              style={{
                borderRadius: `40% 60% 70% 30%`,
                animationDelay: `1.5s`,
                animationDuration: `3s`,
              }}
            ></div>
            <div
              className="absolute bottom-1/4 right-0 w-10 h-10 bg-primary-300/40 blur-sm animate-pulse"
              style={{
                borderRadius: `50% 50% 30% 70%`,
                animationDelay: `2s`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
