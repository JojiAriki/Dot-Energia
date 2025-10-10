import { useBasePath } from '@/hooks/useBasePath';

export function SustainabilitySection() {
  const { getImagePath } = useBasePath();
  return (
    <section
      id="sustainability"
      className="relative"
      style={{
        backgroundImage: `url(${getImagePath('images/bg-sustentabilidade.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradiente de transição na parte inferior */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b to-transparent via-secondary-950 from-secondary-950"></div>
      <img
        className="object-cover -mt-36 absolute bottom-0 min-[1200px]:-right-36 w-50"
        src="images/elice.png"
        alt="elice"
      />
      <div className="container-max section-padding relative py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            {/* Header principal */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Energia 100%{' '}
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  renovável
                </span>{' '}
                para economia com propósito
              </h2>
              <p className="text-2xl text-green-500 leading-relaxed font-light">
                Transforme os resultados da sua empresa com energia limpa e
                certificada
              </p>
            </div>

            {/* Descrições destacadas */}
            <div className="space-y-8">
              <p className="text-xl text-white leading-relaxed font-medium">
                Ao migrar com a DOT Energia, sua empresa utiliza energia de
                fontes limpas e certificadas, reduzindo emissões de carbono e
                contribuindo para um futuro sustentável.
              </p>
              <p className="text-xl text-neutral-200 leading-relaxed">
                Além da economia financeira, você fortalece sua marca e acelera
                suas metas ESG com impacto real no meio ambiente.
              </p>
            </div>

            {/* Stats limpos e modernos */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-lg text-neutral-200 font-medium">
                  Energia renovável
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Zero
                </div>
                <div className="text-lg text-neutral-200 font-medium">
                  Emissões de CO₂
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  I-REC
                </div>
                <div className="text-lg text-neutral-200 font-medium">
                  Certificação
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  ESG
                </div>
                <div className="text-lg text-neutral-200 font-medium">
                  Metas cumpridas
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[500px]"></div>
        </div>
      </div>

      {/* Gradiente de transição na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-secondary-950/80 to-secondary-950 z-10"></div>
    </section>
  );
}
